import { doc, getDoc } from 'firebase/firestore'
import { fireStore } from '@/app/firebase/firebase'

export default async function useGetOneProblem(
  id: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  const docRef = doc(fireStore, 'problems', id)
  const docSnap = await getDoc(docRef)
  let data: any = []
  if (docSnap.exists()) {
    data.push(docSnap.data())
  }
  setIsLoading(false)
  return data
}
