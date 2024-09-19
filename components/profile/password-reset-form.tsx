'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useEditProfileStore } from '@/store/useEditProfileForm'
import { LucideLoaderCircle } from 'lucide-react'

// Define the schema for password reset
export const passwordResetSchema = z.object({
  id: z.string(),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export type PasswordResetForm = z.infer<typeof passwordResetSchema>

type Props = {
  initialState: PasswordResetForm,
}

export function PasswordResetForm({ initialState }: Props) {
  const router = useRouter()
  const {
    loading,
    error,
    resetPassword,
  } = useEditProfileStore(state => state)
  const { register, handleSubmit, formState: { errors } } = useForm<PasswordResetForm>({
    resolver: zodResolver(passwordResetSchema),
    defaultValues: initialState
  })

  const onSubmit = async (data: PasswordResetForm) => {
    try {
      const res = await resetPassword(data)
      toast.success('Update Password Success')
      router.push('/profile')
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }

  }

  return (
    <Card className="w-[350px] h-[360px]">
      <CardHeader>
        <CardTitle>Reset Password</CardTitle>
        <CardDescription>Enter your new password below.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">New Password</Label>
              <Input 
                id="password" 
                type="password"
                {...register('password')}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input 
                id="confirmPassword" 
                type="password"
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled={loading} type="submit" className="w-full">
            {loading && <LucideLoaderCircle className='w-4 h-4 mr-2' />}Reset Password
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}