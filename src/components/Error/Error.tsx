import { ReactNode } from 'react'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import { PageTitle } from '../PageTitle/PageTitle'

interface ErrorProps {
	title?: string
	description?: ReactNode
	homepageLink?: boolean
}

export function Error({ title, description, homepageLink = false }: ErrorProps) {
	return (
		<div>
			<PageTitle title={title || 'Oops!'} />
			<Container>
				<div className='flex gap-9 flex-col py-10'>
					<p>
						{description || (
							<>
								Oops!
								<br /> Parece que algo deu errado, tente atualizar a página ou volte mais tarde.
							</>
						)}
					</p>
					{homepageLink && (
						<Button asLink href='/'>
							Voltar
						</Button>
					)}
				</div>
			</Container>
		</div>
	)
}
