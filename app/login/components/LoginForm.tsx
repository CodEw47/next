'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input, InputPassword } from '@/components/ui/input'
import { onLoginAction } from '@/services/api/loginApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRef } from 'react'
import { useFormState } from 'react-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().trim().email('Digite um email válido.'),
  password: z.string().trim().min(1, 'Digite sua senha para continuar.')
})

type LoginValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [_, formAction] = useFormState(onLoginAction, {
    message: ''
  })

  const form = useForm<LoginValues>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(loginSchema)
  })

  return (
    <Form {...form}>
      <form
        ref={formRef}
        id="login-form"
        onSubmit={form.handleSubmit(() => formRef.current?.submit())}
        action={formAction}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Seu email" {...field} autoComplete="one-time-code" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <InputPassword placeholder="Sua senha" {...field} autoComplete="one-time-code" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Entrar</Button>
      </form>
    </Form>
  )
}
