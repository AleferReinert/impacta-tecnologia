import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { ContactForm } from './ContactForm'

const meta: Meta<typeof ContactForm> = {
	title: 'Components/ContactForm',
	component: ContactForm
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'ContactForm',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const nameInput = canvas.getByLabelText(/nome/i, { selector: 'input' })
		const emailInput = canvas.getByLabelText(/e-mail/i, { selector: 'input' })
		const messageInput = canvas.getByLabelText(/mensagem/i, { selector: 'textarea' })
		const submitButton = canvas.getByRole('button', { name: /Enviar mensagem/i })

		await step('Render fields name, email, message and submit button', () => {
			expect(nameInput).toBeInTheDocument()
			expect(emailInput).toBeInTheDocument()
			expect(messageInput).toBeInTheDocument()
			expect(submitButton).toHaveAttribute('type', 'submit')
		})

		// Remove temporariamente o atributo "required" para simular erros manualmente sem validação do html
		nameInput.removeAttribute('required')
		emailInput.removeAttribute('required')
		messageInput.removeAttribute('required')

		await step('Simulate error on empty name', async () => {
			await userEvent.click(submitButton)
			waitFor(() => {
				expect(canvas.getByText(/Digite seu nome./i)).toBeVisible()
			})
		})

		await step('Simulate error on empty e-mail', async () => {
			await userEvent.type(nameInput, 'John Doe')
			await userEvent.click(submitButton)
			waitFor(() => {
				expect(canvas.getByText(/Digite seu e-mail./i)).toBeVisible()
			})
		})

		await step('Simulate error on empty message', async () => {
			await userEvent.type(emailInput, 'john@example.com')
			await userEvent.click(submitButton)
			waitFor(() => {
				expect(canvas.getByText(/Digite sua mensagem./i)).toBeVisible()
			})
		})

		await step('Simulate send success', async () => {
			await userEvent.type(messageInput, 'Lorem ipsum dolor sit amet.')
			await userEvent.click(submitButton)
			waitFor(() => {
				const sendOtherMessageButton = canvas.getByRole('button', { name: 'Enviar outra mensagem' })
				expect(sendOtherMessageButton).toBeInTheDocument()
				expect(canvas.getByText('Mensagem enviada com sucesso, responderemos em breve!')).toBeInTheDocument()
				expect(nameInput).not.toBeInTheDocument()
				expect(emailInput).not.toBeInTheDocument()
				expect(messageInput).not.toBeInTheDocument()
			})
		})
	}
}

