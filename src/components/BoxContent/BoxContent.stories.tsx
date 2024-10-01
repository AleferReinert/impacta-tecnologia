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

export const Light: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const title = canvas.getByRole('heading')
		const description = canvas.getAllByRole('paragraph')
		const background = document.querySelector('.bg-slate-100')

		expect(background).not.toBeInTheDocument()
		expect(title).toHaveTextContent('Lorem ipsum')
		expect(description.length).toBe(2)
	}
}

export const Dark: Story = {
	args: {
		theme: 'dark'
	},
	play: async () => {
		const background = document.querySelector('.bg-slate-100')
		expect(background).toBeInTheDocument()
	}
}

