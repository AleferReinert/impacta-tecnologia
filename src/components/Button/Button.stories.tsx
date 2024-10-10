import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
	name: 'Outline Secondary (default)',
	args: {
		children: 'Outline Secondary (default)'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		step('Render as variant outline-secondary', () => {
			const button = canvas.getByRole('button')
			expect(button).toHaveClass('border-secondary text-secondary')
		})
	}
}

export const OutlineWhite: Story = {
	parameters: {
		backgrounds: {
			default: 'Dark'
		}
	},
	args: {
		children: 'Outline White',
		variant: 'outline-white'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		step('Render as variant outline-white', () => {
			const button = canvas.getByRole('button')
			expect(button).toHaveClass('border-white text-white')
		})
	}
}

export const Fill: Story = {
	args: {
		children: 'Fill Button',
		variant: 'fill'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		step('Render as variant fill', () => {
			const button = canvas.getByRole('button')
			expect(button).toHaveClass('bg-secondary text-white')
		})
	}
}

export const Full: Story = {
	args: {
		children: 'Full Button',
		full: true
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		step('Render with width 100%', () => {
			const button = canvas.getByRole('button')
			expect(button).toHaveClass('w-full')
		})
	}
}

export const AsLink: Story = {
	args: {
		children: 'As Link',
		href: 'example.com',
		asLink: true
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		step('Render button as link (<a>)', () => {
			const buttonAsLink = canvas.getByRole('link')
			expect(buttonAsLink).toHaveAttribute('href')
		})
	}
}

