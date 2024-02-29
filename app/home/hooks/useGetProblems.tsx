import { collection, query, getDocs } from 'firebase/firestore'
import { fireStore } from '@/app/firebase/firebase'
import { DBProblems } from '@/types/problem'

export const useGetProblems = async (setIsLoading: any) => {
  const q = query(collection(fireStore, 'problems'))
  const querySnapshot = await getDocs(q)
  let data: any = []

  querySnapshot.forEach((doc) => {
    data.push(doc.data().newData)
  })
  data.sort((a: DBProblems, b: DBProblems) => a.order - b.order)
  setIsLoading(false)
  return data
}
