export function ContactForm() {
	return (
		<form className='mx-auto max-w-96' action='mailto:aleferreinert@gmail.com subject:titulo'>
			<label className='font-medium text-sm'>
				Nome:
				<br />
				<input type='text' required />
			</label>
			<label className='font-medium text-sm'>
				E-mail:
				<br />
				<input type='text' required />
			</label>
			<label className='font-medium text-sm'>
				Mensagem:
				<br />
				<textarea placeholder='Digite sua mensagem...' required />
			</label>

			<button type='submit' className='w-full bg-primary text-white h-10'>
				Enviar mensagem
			</button>
		</form>
	)
}
