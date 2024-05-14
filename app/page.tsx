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
import { Input } from '@/components/ui/input'
import { login } from '@/services/api/loginApi'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email('Digite um email válido.'),
  password: z.string().min(1, 'Digite sua senha para continuar.')
})

type LoginValues = z.infer<typeof loginSchema>

export default function Login() {
  const form = useForm<LoginValues>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(loginSchema)
  })

  async function onSubmit(data: LoginValues) {
    await login({ email: data.email, password: data.password })
  }

  return (
    <main className="p-4 flex items-center justify-center min-h-screen">
      <div>
        <header className="mb-6">
          <h1 className="font-semibold text-2xl mb-1">Faça login para continuar</h1>
          <p>Digite o seu e-mail e senha para entrar.</p>
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu email" {...field} />
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
                    <Input placeholder="Sua senha" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="outline">
              Entrar
            </Button>
          </form>
        </Form>
        <footer className="text-center mt-7 flex flex-col gap-2">
          <Link href="/forgot-password" className="underline">
            Esqueci minha senha
          </Link>
          <small>SouRev - Copyright © 2024</small>
        </footer>
      </div>
    </main>
  )
}
