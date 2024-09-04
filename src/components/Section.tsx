import { ReactNode } from 'react'
import { Container } from './Container'

interface SectionProps {
	title: string
	children: ReactNode
	theme?: 'light' | 'dark'
	direction?: 'left' | 'center'
}

export function Section({ title, children, theme = 'light', direction = 'center' }: SectionProps) {
	const directionStyles = direction === 'center' ? 'text-center mx-auto' : ''
	return (
		<section
			className={`${theme === 'light' ? 'bg-white' : 'bg-slate-100'} py-16 last:border-0 [&_a]:mx-auto`}
		>
			<Container>
				<h2
					className={`${directionStyles} ${
						theme === 'light' ? 'text-secondary' : 'text-secondary'
					} font-medium text-3xl max-w-fit`}
				>
					{title}
					<span className={`${directionStyles} block w-10 h-[1px] bg-secondary my-4`}></span>
				</h2>
				{children}
			</Container>
		</section>
	)
}
