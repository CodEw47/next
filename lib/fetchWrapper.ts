const baseUrl =
  process.env.NODE_ENV === 'production' ? process.env.APP_URL : process.env.APP_URL_DEV

export async function fetchWrapper<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  const data = await fetch(`${baseUrl}${input}`, init)
  const result = await data.json()
  return result as T
}
