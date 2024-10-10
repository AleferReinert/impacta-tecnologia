import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Loading } from './Loading'

const meta: Meta<typeof Loading> = {
	title: 'Components/Loading',
	component: Loading
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Full (default)',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const loadingContainer = canvas.getByTitle('Carregando...')
		const loadingSpinner = loadingContainer.children[0]

		await step('Render spinner', () => {
			expect(loadingSpinner).toHaveClass('animate-spin')
		})
		await step('Container full screen', () => {
			expect(loadingContainer).toHaveClass('fixed inset-0')
		})
	}
}

export const Component: Story = {
	args: {
		show: true,
		type: 'component',
		showLoad: true
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const loadingContainer = canvas.getByTitle('Carregando...')

		await step('Animation pulse on container', () => {
			expect(loadingContainer).toHaveClass('animate-pulse')
		})

		await step('Container not full screen', () => {
			expect(loadingContainer).not.toHaveClass('fixed inset-0')
		})
	}
}

export const Animation: Story = {
	args: {
		show: true,
		type: 'animation',
		className: 'size-10'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const loadingContainer = canvas.getByTitle('Carregando...')

		await step('Scale 50% and test className', () => {
			expect(loadingContainer).toHaveClass('scale-50 size-10')
		})
	}
}

