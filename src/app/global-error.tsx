'use client'
import { Button } from '@/components/Button'
import { Error } from '@/components/Error/Error'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	console.log(`src/app/global-error.tsx: ${error}`)

	return (
		<html>
			<body style={{ fontFamily: 'sans-serif' }}>
				<Error>
					<Button onClick={() => reset()}>Tentar novamente</Button>
				</Error>
			</body>
		</html>
	)
}
