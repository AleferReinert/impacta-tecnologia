import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Section } from './Section'

const meta: Meta<typeof Section> = {
	title: 'Components/Section',
	component: Section,
	args: {
		children: <p>Children</p>
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Light (default)',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const section = canvasElement.children[0].children[0]
		const children = canvas.getByRole('paragraph')
		const heading = canvas.queryByRole('heading')

		await step('Render children', () => {
			expect(children).toHaveTextContent('Children')
		})

		await step('Light theme', () => {
			expect(section).toHaveClass('bg-white')
		})

		await step('Do not render heading', () => {
			expect(heading).not.toBeInTheDocument()
		})
	}
}

export const Dark: Story = {
	args: {
		theme: 'dark',
		title: 'Heading2'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const section = canvasElement.children[0].children[0]
		const heading2 = canvas.getByRole('heading', { level: 2 })

		await step('Dark theme', () => {
			expect(section).toHaveClass('bg-slate-100')
		})

		await step('Render optional title: h2 by default', () => {
			expect(heading2).toBeInTheDocument()
		})
	}
}

export const HeadingLevel: Story = {
	args: {
		title: 'Heading1',
		headingLevel: 'h1'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const heading1 = canvas.getByRole('heading', { level: 1 })

		await step('Render optional title as h1', () => {
			expect(heading1).toBeInTheDocument()
		})
	}
}

