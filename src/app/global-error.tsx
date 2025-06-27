'use client'
import { Error } from '@/components/Error/Error'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	console.error(`src/app/global-error.tsx: ${error}`)

	return (
		<html>
			<body style={{ fontFamily: 'sans-serif' }}>
				<Error />
			</body>
		</html>
	)
}
