import { ComponentProps } from 'react'
import { Container } from './Container'

interface SectionProps extends ComponentProps<'section'> {
	title?: string
	theme?: 'light' | 'dark'
	headingLevel?: 'h1' | 'h2'
}

export function Section({ title, theme = 'light', headingLevel = 'h2', ...rest }: SectionProps) {
	const HeadingTag = headingLevel

	return (
		<section
			{...rest}
			className={`${rest.className ?? ''} ${theme === 'light' ? 'bg-white' : 'bg-slate-100'} py-12 last:border-0 [&_a]:mx-auto`}
		>
			<Container>
				{title && (
					<HeadingTag className='text-center mx-auto text-secondary font-medium text-2xl max-w-fit font-heading uppercase'>
						{title}
						<hr className='mx-auto w-10 border-primary my-5' />
					</HeadingTag>
				)}
				{rest.children}
			</Container>
		</section>
	)
}
