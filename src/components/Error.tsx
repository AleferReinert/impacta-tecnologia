import { Container } from '@/components/Container'
import { PageTitle } from '@/components/PageTitle'
import { Button } from './Button'

interface ErrorProps {
	title?: string
	description?: string
	homepageLink?: boolean
}

export function Error({
	title = 'Ops!',
	description = 'Algo deu errado, tente novamente mais tarde.',
	homepageLink = false
}: ErrorProps) {
	return (
		<div>
			<PageTitle title={title} />
			<Container>
				<div className='flex gap-9 flex-col py-10'>
					<p>{description}</p>
				</div>
				{homepageLink && (
					<Button asLink href='/'>
						Voltar
					</Button>
				)}
			</Container>
		</div>
	)
}
