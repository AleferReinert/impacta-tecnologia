import { Container } from './Container'

interface PageTitleProps {
	children: string
}

export function PageTitle({ children }: PageTitleProps) {
	return (
		<div className='bg-secondary py-8'>
			<Container>
				<h1 className='font-bold text-xl text-white font-heading uppercase'>{children}</h1>
			</Container>
		</div>
	)
}
