'use client'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { Button } from './Button'
import { FormField } from './FieldForm'
import { Loading } from './Loading'

export function ContactForm() {
	const form = useRef(null)
	const [formSubmitted, setFormSubmitted] = useState(false)
	const [loading, setLoading] = useState(false)
	const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
	const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
	const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)

		if (form.current && serviceId && templateId) {
			emailjs
				.sendForm(serviceId, templateId, form.current, {
					publicKey
				})
				.then(
					() => {
						console.log('E-mail enviado com sucesso!')
						setFormSubmitted(true)
						setLoading(false)
					},
					error => {
						console.log('Falha ao enviar e-mail...', error.text)
					}
				)
		}
	}

	return (
		<>
			<Loading show={loading} />
			{formSubmitted ? (
				<div className='flex flex-col gap-10 items-center'>
					<p className='text-center border-green-700 p-4 bg-green-100 text-green-700 max-w-fit'>
						Mensagem enviada com sucesso, responderemos em breve!
					</p>
					<Button onClick={() => setFormSubmitted(false)}>Enviar outra mensagem</Button>
				</div>
			) : (
				<form ref={form} onSubmit={sendEmail} className='mx-auto max-w-96 flex flex-col'>
					<FormField label='Nome' name='name' />
					<FormField label='E-mail' name='email' inputType='email' />
					<FormField
						label='Mensagem'
						name='message'
						fieldType='textarea'
						placeholder='Digite sua mensagem...'
					/>
					<Button variant='fill' full>
						Enviar mensagem
					</Button>
				</form>
			)}
		</>
	)
}
