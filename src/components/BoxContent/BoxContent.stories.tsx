import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { BoxContent } from './BoxContent'

const meta: Meta<typeof BoxContent> = {
	title: 'Components/BoxContent',
	component: BoxContent,
	args: {
		title: 'Lorem ipsum',
		description: '<p>Paragraph 1.</p><p>Paragraph 2.</p>',
		icon: 'TfiEye'
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Light (default)',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Render h2 and descriptions', () => {
			const title = canvas.getByRole('heading', { level: 2 })
			const descriptions = canvas.getAllByRole('paragraph')
			expect(title).toHaveTextContent('Lorem ipsum')
			expect(descriptions.length).toBe(2)
		})

		await step('Theme light', () => {
			const background = document.querySelector('.bg-slate-100')
			expect(background).not.toBeInTheDocument()
		})
	}
}

export const Dark: Story = {
	args: {
		theme: 'dark'
	},
	play: async ({ step }) => {
		step('Render theme dark', () => {
			const background = document.querySelector('.bg-slate-100')
			expect(background).toBeInTheDocument()
		})
	}
}

