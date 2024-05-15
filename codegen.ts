import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      'https://services.revpay.com.br/dyna.svc/graphql': {
        headers: {
          Authorization: 'YOUR-TOKEN-HERE'
        }
      }
    }
  ],
  documents: ['src/**/*.ts?(x)'],
  ignoreNoDocuments: true,
  config: {},
  generates: {
    './gql/': {
      preset: 'client-preset',
      config: {
        enumsAsTypes: true,
        dedupeFragments: true
      }
    }
  }
}

export default config
