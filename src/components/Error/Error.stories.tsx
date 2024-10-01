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
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const title = canvas.getByRole('heading')
		const description = canvas.getByText('Oops! Parece que algo deu errado, tente atualizar a página ou volte mais tarde.')

		expect(title).toHaveTextContent('Oops!')
		expect(description).toBeInTheDocument()
	}
}

export const Custom: Story = {
	args: {
		title: 'Custom title',
		description: 'Custom description.',
		homepageLink: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const title = canvas.getByRole('heading')
		const description = canvas.getByText('Custom description.')
		const homepageLink = canvas.getByRole('link', { name: 'Voltar' })

		expect(title).toHaveTextContent('Custom title')
		expect(description).toBeInTheDocument()
		expect(homepageLink).toBeInTheDocument()
	}
}

