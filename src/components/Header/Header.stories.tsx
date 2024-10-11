import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { EnterpriseMock } from '../Layout/Layout.mock'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
	title: 'Components/Header',
	component: Header,
	args: { enterprise: EnterpriseMock }
}

export default meta
type Story = StoryObj<typeof meta>

export const Desktop: Story = {
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const logo = canvas.getByRole('img', { name: 'John Doe Corporation' })
		const openMenuButton = canvas.queryByRole('button', { name: 'Abrir menu' })
		const links = ['Sobre nós', 'Serviços', 'Contato']

		await step('Render logo and links', () => {
			expect(logo).toBeInTheDocument()
			links.forEach(name => {
				const link = canvas.getByRole('link', { name })
				expect(link).toBeInTheDocument()
			})
		})

		await step('Hidden openMenuButton', () => {
			expect(openMenuButton).not.toBeInTheDocument()
		})
	}
}

export const Mobile: Story = {
	parameters: {
		viewport: { defaultViewport: 'tailwindxs' }
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		const links = ['Sobre nós', 'Serviços', 'Contato']

		await step('Render openMenuButton', () => {
			waitFor(() => {
				const openMenuButton = canvas.getByRole('button', { name: 'Abrir menu' })
				expect(openMenuButton).toBeInTheDocument()
			})
		})

		await step('Hidden links', () => {
			links.forEach(name => {
				waitFor(() => {
					const link = canvas.getByRole('link', { name })
					expect(link).not.toBeVisible()
				})
			})
		})

		await step('Open menu: show closeMenuButton and links', async () => {
			waitFor(() => {
				const openMenuButton = canvas.getByRole('button', { name: 'Abrir menu' })
				const closeMenuButton = canvas.getByRole('button', { name: 'Fechar menu' })
				userEvent.click(openMenuButton)
				expect(closeMenuButton).toBeVisible()
				links.forEach(name => {
					const link = canvas.getByRole('link', { name })
					expect(link).toBeVisible()
				})
			})
		})

		await step('Hidden menu: hidden closeMenuButton and links', async () => {
			waitFor(async () => {
				const closeMenuButton = canvas.getByRole('button', { name: 'Fechar menu' })
				await userEvent.click(closeMenuButton)
				expect(closeMenuButton).not.toBeVisible()
				links.forEach(name => {
					const link = canvas.getByRole('link', { name })
					expect(link).not.toBeVisible()
				})
			})
		})
	}
}

