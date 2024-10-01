'use client'
import { client } from '@/utils/client'
import { ApolloProvider } from '@apollo/client'
import { ReactNode } from 'react'

export const Provider = ({ children }: { children: ReactNode }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}
