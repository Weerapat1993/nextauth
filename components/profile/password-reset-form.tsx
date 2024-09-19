'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Define the schema for password reset
const passwordResetSchema = z.object({
  oldPassword: z.string().min(1, 'Old password is required'),
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

type PasswordResetForm = z.infer<typeof passwordResetSchema>

export function PasswordResetForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<PasswordResetForm>({
    resolver: zodResolver(passwordResetSchema)
  })

  const onSubmit = async (data: PasswordResetForm) => {
    // Here you would typically call an API to reset the password
    console.log('Password reset data:', data)
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <Alert>
        <AlertDescription>
          Your password has been successfully reset.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Card className="w-[350px] h-[480px]">
      <CardHeader>
        <CardTitle>Reset Password</CardTitle>
        <CardDescription>Enter your new password below.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className='text-center pb-4'>TODO:</div>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Old Password</Label>
              <Input 
                id="oldPassword" 
                type="password"
                {...register('password')}
              />
              {errors.oldPassword && (
                <p className="text-sm text-red-500">{errors.oldPassword.message}</p>
              )}
            </div>
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
          <Button type="submit" className="w-full">Reset Password</Button>
        </CardFooter>
      </form>
    </Card>
  )
}