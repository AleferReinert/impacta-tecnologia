'use client'
import { Error } from '@/components/Error'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	console.log(`src/app/global-error.tsx: ${error}`)

	return (
		<html>
			<body>
				<Error />
			</body>
		</html>
	)
}
