import { ReactNode } from 'react'
import { Container } from './Container'

interface SectionProps {
	title?: string
	children: ReactNode
	theme?: 'light' | 'dark'
	direction?: 'left' | 'center'
}

export function Section({ title, children, theme = 'light', direction = 'center' }: SectionProps) {
	const directionStyles = direction === 'center' ? 'text-center mx-auto' : ''

	return (
		<section
			className={`${theme === 'light' ? 'bg-white' : 'bg-slate-100'} py-12 last:border-0 [&_a]:mx-auto`}
		>
			<Container>
				{title && (
					<h2 className={`${directionStyles} text-secondary font-medium text-3xl max-w-fit`}>
						{title}
						<hr className={`${directionStyles} w-10 border-primary my-4`} />
					</h2>
				)}
				{children}
			</Container>
		</section>
	)
}
