import { ReactNode } from 'react'
import { Container } from './Container'

interface SectionProps {
	title?: string
	children: ReactNode
	theme?: 'light' | 'dark'
}

export function Section({ title, children, theme = 'light' }: SectionProps) {
	return (
		<section
			className={`${theme === 'light' ? 'bg-white' : 'bg-slate-100'} py-12 last:border-0 [&_a]:mx-auto`}
		>
			<Container>
				{title && (
					<h2
						className={`text-center mx-auto text-secondary font-medium text-2xl max-w-fit font-heading uppercase`}
					>
						{title}
						<hr className={`mx-auto w-10 border-primary my-5`} />
					</h2>
				)}
				{children}
			</Container>
		</section>
	)
}
