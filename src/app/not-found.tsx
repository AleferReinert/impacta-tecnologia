import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PageTitle } from '@/components/PageTitle'

export default function Custom404() {
	return (
		<>
			<PageTitle title='404' />
			<Container>
				<div className='flex gap-9 flex-col py-10'>
					<p>Página não encontrada.</p>
					<Button asLink href='/'>
						Voltar
					</Button>
				</div>
			</Container>
		</>
	)
}
