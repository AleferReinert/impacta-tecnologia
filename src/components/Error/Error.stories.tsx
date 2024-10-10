import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Error } from './Error'

const meta: Meta<typeof Error> = {
	title: 'Components/Error',
	component: Error
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Render h1 and description with default messages', () => {
			const title = canvas.getByRole('heading', { level: 1 })
			const description = canvas.getByText('Oops! Parece que algo deu errado, tente atualizar a página ou volte mais tarde.')
			expect(title).toHaveTextContent('Oops!')
			expect(description).toBeInTheDocument()
		})

		await step('Do not show homepage link', () => {
			const homepageLink = canvas.queryByRole('link', { name: 'Voltar' })
			expect(homepageLink).not.toBeInTheDocument()
		})
	}
}

export const Custom: Story = {
	args: {
		title: 'Custom title',
		description: 'Custom description.',
		homepageLink: true
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Custom h1 and description', () => {
			const title = canvas.getByRole('heading', { level: 1 })
			const description = canvas.getByText('Custom description.')
			expect(title).toHaveTextContent('Custom title')
			expect(description).toBeInTheDocument()
		})

		await step('Render homepagelink', () => {
			const homepageLink = canvas.getByRole('link', { name: 'Voltar' })
			expect(homepageLink).toBeInTheDocument()
		})
	}
}

