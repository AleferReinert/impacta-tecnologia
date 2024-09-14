import { Container } from './Container'

interface PageTitleProps {
	title: string
}

export function PageTitle({ title }: PageTitleProps) {
	return (
		<div className='bg-secondary py-8'>
			<Container>
				<h1 className='font-bold text-xl text-white font-heading uppercase'>{title}</h1>
			</Container>
		</div>
	)
}
