import { Container } from '@/components/Container'
import { PageTitle } from '@/components/PageTitle'
import { ReactNode } from 'react'
import { Button } from './Button'

interface ErrorProps {
	title?: string
	description?: string
	homepageLink?: boolean
	children?: ReactNode
}

export function Error({
	title = 'Ops!',
	description = 'Algo deu errado, tente novamente mais tarde.',
	homepageLink = false,
	children
}: ErrorProps) {
	return (
		<div>
			<PageTitle title={title} />
			<Container>
				<div className='flex gap-9 flex-col py-10'>
					<p>{description}</p>
					{homepageLink && (
						<Button asLink href='/'>
							Voltar
						</Button>
					)}
					{children}
				</div>
			</Container>
		</div>
	)
}
