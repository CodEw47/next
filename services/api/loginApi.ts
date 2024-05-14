'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

interface LoginForm {
  email: string
  password: string
}

interface LoginResponse {
  token: string
  expiresIn: number
  expireDate: number
}

export async function login(params: LoginForm) {
  const response = await fetch('https://services.revpay.com.br/auth.svc/user/login', {
    body: JSON.stringify(params),
    method: 'POST'
  })
  const data = (await response.json()) as LoginResponse

  cookies().set('session', data.token, { httpOnly: true, expires: new Date(data.expiresIn) })
  redirect('/dashboard')
}
