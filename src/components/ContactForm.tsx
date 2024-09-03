'use client'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { Button } from './Button'
import { FormField } from './FieldForm'

export function ContactForm() {
	const form = useRef(null)
	const serviceId = process.env.SERVICE_ID
	const templateId = process.env.TEMPLATE_ID
	const publicKey = process.env.PUBLIC_KEY

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (form.current && serviceId && templateId) {
			emailjs // todo: criar variaveis de ambiente
				.sendForm(serviceId, templateId, form.current, {
					publicKey
				})
				.then(
					() => {
						console.log('E-mail enviado com sucesso!')
					},
					error => {
						console.log('Falha ao enviar e-mail...', error.text)
					}
				)
		}
	}

	return (
		<form ref={form} onSubmit={sendEmail} className='mx-auto max-w-96 flex flex-col'>
			<FormField label='Nome' name='name' />
			<FormField label='E-mail' name='email' inputType='email' />
			<FormField label='Mensagem' name='message' fieldType='textarea' placeholder='Digite sua mensagem...' />
			<Button theme='fill' full>
				Enviar mensagem
			</Button>
		</form>
	)
}
