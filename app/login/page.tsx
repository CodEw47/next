import Link from 'next/link'

import { LoginForm } from './components/LoginForm'

export default function Login() {
  return (
    <main className="p-4 flex items-center justify-center min-h-screen">
      <div>
        <header className="mb-6">
          <h1 className="font-semibold text-2xl mb-1">Faça login para continuar</h1>
          <p>Digite o seu e-mail e senha para entrar.</p>
        </header>
        <LoginForm />
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
