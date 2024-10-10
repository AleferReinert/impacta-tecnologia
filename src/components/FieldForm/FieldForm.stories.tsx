import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { FieldForm } from './FieldForm'

const meta: Meta<typeof FieldForm> = {
	title: 'Components/FieldForm',
	component: FieldForm,
	args: {
		label: 'Example',
		name: 'example'
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Type Text (default)',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		step('Render as type text and required', () => {
			const inputText = canvas.getByLabelText(/example/i, { selector: 'input[type="text"]' })
			expect(inputText).toHaveAttribute('required')
		})
	}
}

export const TypeEmail: Story = {
	args: {
		label: 'E-mail',
		name: 'email',
		inputType: 'email',
		value: 'john.doe@gmail.com'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const inputEmail = canvas.getByLabelText(/e-mail/i, { selector: 'input[type="email"]' })

		await step('Render as type email', () => {
			expect(inputEmail).toBeInTheDocument()
		})

		await step('Test correct value', () => {
			expect(inputEmail).toHaveAttribute('value', 'john.doe@gmail.com')
		})
	}
}

export const Textarea: Story = {
	args: {
		label: 'Mensagem',
		name: 'message',
		fieldType: 'textarea',
		placeholder: 'Digite sua mensagem...',
		onChange: () => {}
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const textarea = canvas.getByLabelText(/mensagem/i, { selector: 'textarea' })

		await step('Render as textarea with placeholder', () => {
			expect(textarea).toHaveAttribute('placeholder', 'Digite sua mensagem...')
		})

		await step('Update value on user typing', async () => {
			const newText = 'Novo texto...'
			await userEvent.type(textarea, newText)
			expect(textarea).toHaveValue(newText)
		})
	}
}

