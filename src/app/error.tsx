'use client'
import { Error } from '@/components/Error/Error'
import { useEffect } from 'react'

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error(`src/app/error.tsx: ${error}`)
	}, [error])

	return <Error />
}
