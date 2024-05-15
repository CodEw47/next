'use server'

import { fetchWrapper } from '@/lib/fetchWrapper'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

interface LoginResponse {
  token: string
  expiresIn: number
  expireDate: number
}

interface FormState {
  message: string
}

export async function onLoginAction(prevState: FormState, params: FormData): Promise<FormState> {
  const response = await fetchWrapper<LoginResponse>('/auth.svc/user/login', {
    body: JSON.stringify(params),
    method: 'POST'
  })

  cookies().set('session', response.token, {
    httpOnly: true,
    expires: new Date(response.expiresIn)
  })
  redirect('/dashboard')
}
