import { ReactNode } from 'react'
import { Container } from './Container'

interface SectionProps {
	children: ReactNode
}

export function Section({ children }: SectionProps) {
	return (
		<section className='py-16 border-b border-gray-300 last:border-0 last:pb-0'>
			<Container>{children}</Container>
		</section>
	)
}
