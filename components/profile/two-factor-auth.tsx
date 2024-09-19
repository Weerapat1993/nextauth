'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

const formSchema = z.object({
    phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
        message: "Invalid phone number. Please use international format (e.g., +1234567890).",
    }),
    code: z.string().length(6, { message: "Code must be 6 digits" }).regex(/^\d+$/, { message: "Code must only contain numbers" }),
})

export default function TwoFactorAuthForm() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phoneNumber: "",
            code: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            console.log("Form submitted:", values)
            router.push('/auth/profile')
        } catch (error) {
            console.error("Error verifying 2FA:", error)
            form.setError("code", {
                type: "manual",
                message: "Verification failed. Please try again."
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Two-Factor Authentication</CardTitle>
                <CardDescription className="text-center">Verify your identity to access your account</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+1234567890" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter your phone number in international format.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="code"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Enter 6-digit code</FormLabel>
                                    <FormControl>
                                        <Input placeholder="000000" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter the 6-digit code sent to your phone.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? "Verifying..." : "Verify"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex justify-center">
                <p className="text-sm text-muted-foreground">
                    Didn't receive a code? <Button variant="link" className="p-0 h-auto">Resend</Button>
                </p>
            </CardFooter>
        </Card>
    )
}