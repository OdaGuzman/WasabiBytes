// app/api/graphql/route.ts


import { createYoga } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'
import { schema } from '../../../graphql/schema'


const { handleRequest } = createYoga({
  schema,


  // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
  graphqlEndpoint: '/api/graphql',


  fetchAPI: { Response }
})
export { handleRequest as GET, handleRequest as POST }
