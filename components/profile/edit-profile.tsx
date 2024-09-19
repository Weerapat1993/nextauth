'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import toast from 'react-hot-toast';
import { useEditProfileStore } from '@/store/useEditProfileForm'
import { LucideLoaderCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const profileSchema = z.object({
  id: z.string().min(1, {
    message: "ID required.",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

type ProfileFormValues = z.infer<typeof profileSchema>

type Props = {
  initialState: {
    id: string
    name: string
    email: string
  }
}

export function EditProfile({ initialState }: Props) {
  const router = useRouter()
  const { data, update } = useSession({ required: true });
  const {
    loading,
    error,
    updateProfile,
  } = useEditProfileStore(state => state)
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      id: initialState.id,
      name: initialState.name,
      email: initialState.email,
    },
  })

  async function onSubmit(data: ProfileFormValues) {
    try {
      const user = await updateProfile(data)
      const updateData = await update(user)
      toast.success('Update Profile Success')
      router.push('/profile')
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading} type="submit">
          {loading && <LucideLoaderCircle className='w-4 h-4 mr-2' />}Update profile
        </Button>
      </form>
    </Form>
  )
}