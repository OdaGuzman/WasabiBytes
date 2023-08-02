import { createYoga } from 'graphql-yoga'
import { schema } from '../../../graphql/schema'
import { createContext } from '@/graphql/context'
import type { NextApiRequest, NextApiResponse } from 'next'

const { handleRequest } = createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema,

  context: createContext,
  graphqlEndpoint: '/api/graphql',

  fetchAPI: { Response }
})


export { handleRequest as GET, handleRequest as POST }
