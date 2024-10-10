'use client'
import { useRef, useState } from 'react'
import { toast } from 'sonner'
import { Button } from '../Button/Button'
import { FieldForm } from '../FieldForm/FieldForm'
import { Loading } from '../Loading/Loading'

export function ContactForm() {
	const form = useRef<HTMLFormElement | null>(null)
	const [formSubmitted, setFormSubmitted] = useState(false)
	const [loading, setLoading] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData(prevData => ({ ...prevData, [name]: value }))
	}

	const validateForm = () => {
		if (!formData.name) {
			toast.error('Digite seu nome.')
			return false
		}
		if (!formData.email) {
			toast.error('Digite seu e-mail.')
			return false
		}
		if (!formData.message) {
			toast.error('Digite sua mensagem.')
			return false
		}
		return true
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!validateForm()) return

		setLoading(true)

		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/messages`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ data: formData })
			})

			if (response.ok) {
				setFormSubmitted(true)
				toast.success('Mensagem enviada com sucesso!')
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
		<div data-testid='ContactFormComponent'>
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
					<FieldForm label='Nome' name='name' value={formData.name} onChange={handleInputChange} />
					<FieldForm label='E-mail' name='email' inputType='email' value={formData.email} onChange={handleInputChange} />
					<FieldForm
						label='Mensagem'
						name='message'
						fieldType='textarea'
						placeholder='Digite sua mensagem...'
						value={formData.message}
						onChange={handleInputChange}
					/>
					<Button type='submit' variant='fill' full>
						Enviar mensagem
					</Button>
				</form>
			)}
		</div>
	)
}
