'use client'
import axios from 'axios'
import { GetWrapperCode } from '../problemsWrapper/two-sum'
import { CheckArrayAnswer } from '../CheckUserAnswer/CheckArrayAnswer'
import { ErrorTopCenterAuth } from '@/components/Toast/Toast'
import { SetterOrUpdater } from 'recoil'
import { defaultValuesProps } from '@/app/problems/atoms/RunAtom'

export async function OnlineCompiler(
  sourceCode: string,
  lang: string,
  type: string,
  setIsLoading: SetterOrUpdater<defaultValuesProps>
) {
  const API_KEY = process.env.NEXT_PUBLIC_JUDGE0_API
  sourceCode = GetWrapperCode(sourceCode, lang, type)
  console.log(sourceCode, lang, type, 'after')
  try {
    const url = 'https://judge0-ce.p.rapidapi.com/submissions'
    const data = {
      language_id: getLanguage(lang),
      source_code: sourceCode,
      redirect_stderr_to_stdout: true,
    }

    const headers = {
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      'X-RapidAPI-Key': API_KEY,
      'Content-Type': 'application/json',
    }

    setIsLoading((prev) => ({ ...prev, isRun: true }))
    const response = await axios.post(url, data, { headers })
    console.log(getLanguage(lang), 'my current language')
    if (!response.data.token) {
      throw new Error('Submission creation failed.')
    }

    const submissionId = response.data.token

    const statusResponse = await axios.get(
      `https://judge0-ce.p.rapidapi.com/submissions/${submissionId}`,
      { headers }
    )
    let status = statusResponse.data
    // new code
    console.log(statusResponse, 'to show is there is loading')
    while (['In Queue', 'Processing'].includes(status.status.description)) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const updatedStatusResponse = await axios.get(
        `https://judge0-ce.p.rapidapi.com/submissions/${submissionId}`,
        { headers }
      )
      status = updatedStatusResponse.data
    }
    console.log(status, 'After submission')

    const output = status.stdout
    const description = status.status.description
    console.log(output)

    let wrongAnswer = null
    let jsonString = null
    if (lang == 'python') {
      jsonString = output.replace(/'/g, '"')
    } else if (lang === 'javascript' || lang === 'typescript') {
      jsonString = output.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":')
    }
    const parsedOutput = JSON.parse(jsonString)
    console.log(parsedOutput)
    setIsLoading((prev) => ({ ...prev, isRun: false }))
    console.log(output, typeof output, 'from accept')
    wrongAnswer = CheckArrayAnswer(parsedOutput)
    if (description === 'Time Limit Exceeded') {
      ErrorTopCenterAuth('Time Limit Exceeded')
    } else if (description !== 'Accepted') {
      ErrorTopCenterAuth('please check your code and try again')
    }
    return {
      userWrongAnswer: wrongAnswer,
      type: type,
      error: '',
    }
  } catch (error: any) {
    console.log(error.message, error)
    setIsLoading((prev) => ({ ...prev, isRun: false }))
    if (error?.message === 'Request failed with status code 429') {
      ErrorTopCenterAuth(
        'Daily submission limit reached! Please try again tomorrow'
      )
    } else {
      ErrorTopCenterAuth('something went wrong please try again')
    }
    const errorMessage =
      error?.message === 'Request failed with status code 429'
        ? 'Daily submission limit reached! Please try again tomorrow'
        : 'something went wrong please try again'
    return {
      error: errorMessage,
      type: type,
    }
  }
}

function getLanguage(lang: string) {
  switch (lang) {
    case 'python':
      return 92
    case 'javascript':
      return 93
    case 'typescript':
      return 94
  }
}
