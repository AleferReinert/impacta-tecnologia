import { ComponentProps, ReactNode } from 'react'
import { tv } from 'tailwind-variants'
import { Container } from '../Container/Container'

interface SectionProps extends ComponentProps<'section'> {
	children: ReactNode
	theme?: 'light' | 'dark'
	title?: string
	headingLevel?: 'h1' | 'h2'
}

const sectionStyles = tv({
	base: 'py-12 last:border-0 [&_a]:mx-auto',
	variants: {
		theme: {
			light: 'bg-white',
			dark: 'bg-slate-100'
		}
	}
})

const headingStyles = tv({
	base: 'text-center mx-auto text-secondary font-medium text-2xl max-w-fit font-heading uppercase'
})

export function Section({ title, theme = 'light', headingLevel = 'h2', children, ...rest }: SectionProps) {
	const HeadingTag = headingLevel

	return (
		<section {...rest} className={`${sectionStyles({ theme })} ${rest.className ?? ''}`}>
			<Container>
				{title && (
					<HeadingTag className={headingStyles()}>
						{title}
						<hr className='mx-auto w-10 border-primary my-5' />
					</HeadingTag>
				)}
				{children}
			</Container>
		</section>
	)
}
