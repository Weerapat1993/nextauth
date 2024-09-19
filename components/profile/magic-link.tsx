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

const magicLinkSchema = z.object({
  id: z.string().min(1, {
    message: "ID required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

type MagicLinkFormValues = z.infer<typeof magicLinkSchema>

export function MagicLinkForm() {
  const router = useRouter()
  const { data, update } = useSession({ required: true });
  const {
    loading,
    error,
    updateProfile,
  } = useEditProfileStore(state => state)
  const form = useForm<MagicLinkFormValues>({
    resolver: zodResolver(magicLinkSchema),
  })

  async function onSubmit(data: MagicLinkFormValues) {
    try {
      // const user = await updateProfile(data)
      // const updateData = await update(user)
      toast.success('Update Magic Link Success')
      // router.push('/profile')
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
          {loading && <LucideLoaderCircle className='w-4 h-4 mr-2' />}Send Magic Link
        </Button>
      </form>
    </Form>
  )
}