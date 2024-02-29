'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import InputField from '@/components/InputField/Input'
import Button from '@/components/Button/Button'
import { doc, setDoc } from 'firebase/firestore'
import { fireStore } from '@/app/firebase/firebase'

const problemSchema = z.object({
  id: z.string(),
  title: z.string().min(3, 'Title must be at least 3 characters long'),
  category: z.string().min(1, 'Category must be provided'),
  difficulty: z.enum(['Easy', 'Medium', 'Hard']),
  likes: z.string(),
  dislikes: z.string(),
  VideoId: z.string().optional(),
  order: z.string(),
})

export default function AddProblem() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(problemSchema),
  })

  const onSubmit = async (data: any) => {
    console.log(data)
    const newData = {
      ...data,
      order: Number(data.order),
      likes: Number(data.likes),
      dislikes: Number(data.dislikes),
    }
    console.log(newData)
    await setDoc(doc(fireStore, 'problems', `${data.id}`), {
      newData,
    })

    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputField
          name="id"
          type="text"
          placeholder="id"
          register={register}
          errors={errors}
          id="id"
        />
      </div>
      <div>
        <InputField
          name="title"
          type="text"
          placeholder="title"
          register={register}
          errors={errors}
          id="title"
        />
      </div>
      <div>
        <InputField
          name="category"
          type="text"
          placeholder="category"
          register={register}
          errors={errors}
          id="category"
        />
      </div>
      <div>
        <InputField
          name="difficulty"
          type="text"
          placeholder="difficulty"
          register={register}
          errors={errors}
          id="difficulty"
        />
      </div>
      <div>
        <InputField
          name="likes"
          type="text"
          placeholder="likes"
          register={register}
          errors={errors}
          id="likes"
        />
      </div>
      <div>
        <InputField
          name="dislikes"
          type="text"
          placeholder="dislikes"
          register={register}
          errors={errors}
          id="dislikes"
        />
      </div>
      <div>
        <InputField
          name="order"
          type="text"
          placeholder="order"
          register={register}
          errors={errors}
          id="order"
        />
      </div>
      <div>
        <InputField
          name="VideoId"
          type="text"
          placeholder="VideoId"
          register={register}
          errors={errors}
          id="VideoId"
        />
      </div>
      <div>
        <InputField
          name="link"
          type="text"
          placeholder="Link"
          register={register}
          errors={errors}
          id="link"
        />
      </div>
      <Button type="submit" name="Submit" className="w-full h-10" />
    </form>
  )
}
