import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { PageTitle } from '@/components/PageTitle'

export default function Contact() {
	return (
		<Layout>
			<Container>
				<PageTitle>Contato</PageTitle>
				<p className='mb-10'>
					Entre em contato conosco para saber mais sobre nossos serviços e como podemos ajudar a transformar a
					forma como sua empresa utiliza a tecnologia.
				</p>
				<form className='mx-auto max-w-96'>
					<label className='font-semibold text-sm'>
						Nome:
						<br />
						<input type='text' className='border h-10 px-2 w-full mb-4 focus:outline-none' required />
					</label>
					<label className='font-semibold text-sm'>
						E-mail:
						<br />
						<input type='text' className='border h-10 px-2 w-full mb-4 focus:outline-none' required />
					</label>
					<label className='font-semibold text-sm'>
						Mensagem:
						<br />
						<textarea
							placeholder='Digite sua mensagem...'
							className='border h-40 p-2 w-full mb-4 focus:outline-none'
							required
						/>
					</label>

					<button type='submit' className='w-full bg-primary text-white h-10'>
						Enviar mensagem
					</button>
				</form>
			</Container>
		</Layout>
	)
}
