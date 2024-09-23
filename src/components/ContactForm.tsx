'use client'
import { useRef, useState } from 'react'
import { toast } from 'sonner'
import { Button } from './Button'
import { FormField } from './FieldForm'
import { Loading } from './Loading'

export function ContactForm() {
	const form = useRef<HTMLFormElement | null>(null)
	const [formSubmitted, setFormSubmitted] = useState(false)
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const formData = new FormData(form.current!)
		const name = formData.get('name') as string
		const email = formData.get('email') as string
		const message = formData.get('message') as string

		if (name.length === 0) {
			toast.error('Digite seu nome.')
			return null
		} else if (email.length === 0) {
			toast.error('Digite seu e-mail.')
			return null
		} else if (message.length === 0) {
			toast.error('Digite sua mensagem.')
			return null
		}

		setLoading(true)
		const data = { data: { name, email, message } }

		try {
			const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/messages', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})

			if (response.ok) {
				setFormSubmitted(true)
			} else {
				toast.error('Erro ao enviar o formulário.')
			}
		} catch (error) {
			toast.error('Erro ao enviar o formulário.')
			console.error('Erro de rede', error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div>
			<Loading show={loading} />
			{formSubmitted ? (
				<div className='flex flex-col gap-10 items-center'>
					<p className='text-center border-green-700 p-4 bg-green-100 text-green-700 max-w-fit'>
						Mensagem enviada com sucesso, responderemos em breve!
					</p>
					<Button onClick={() => setFormSubmitted(false)}>Enviar outra mensagem</Button>
				</div>
			) : (
				<form ref={form} onSubmit={handleSubmit} className='mx-auto max-w-96 flex flex-col'>
					<FormField label='Nome' name='name' />
					<FormField label='E-mail' name='email' inputType='email' />
					<FormField label='Mensagem' name='message' fieldType='textarea' placeholder='Digite sua mensagem...' />
					<Button variant='fill' full>
						Enviar mensagem
					</Button>
				</form>
			)}
		</div>
	)
}
