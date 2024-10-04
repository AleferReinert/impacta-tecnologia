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
	render: () => <Button>Default</Button>,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')
		expect(button).toBeInTheDocument()
	}
}

export const Full: Story = {
	render: () => <Button full>Full Button</Button>,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')
		expect(button).toHaveClass('w-full')
	}
}

export const AsLink: Story = {
	render: () => (
		<Button asLink href='example.com'>
			As Link
		</Button>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const buttonAsLink = canvas.getByRole('link')
		expect(buttonAsLink).toHaveAttribute('href')
	}
}

export const VariantFill: Story = {
	render: () => <Button variant='fill'>Fill</Button>,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')
		expect(button).toHaveClass('bg-secondary text-white')
	}
}

export const VariantOutlineWhite: Story = {
	parameters: {
		backgrounds: {
			default: 'Dark'
		}
	},
	render: () => <Button variant='outline-white'>Outline White</Button>,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')
		expect(button).toHaveClass('border-white text-white')
	}
}

