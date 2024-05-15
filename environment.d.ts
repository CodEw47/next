import 'next'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_URL_DEV: string
      APP_URL: string
      APP_GRAPHQL: string
      APP_GRAPHQL_DEV: string
      APP_PORT: number
    }
  }
}
