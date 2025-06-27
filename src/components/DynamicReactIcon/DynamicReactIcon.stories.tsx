import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { DynamicReactIcon } from './DynamicReactIcon'

const meta: Meta<typeof DynamicReactIcon> = {
	title: 'Components/DynamicReactIcon',
	component: DynamicReactIcon,
	args: {
		'name': 'FaCheck',
		'className': 'size-10',
		'aria-hidden': true
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'DynamicReactIcon',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Render loading before', () => {
			const loading = canvas.getByTitle('Carregando...')
			expect(loading).toBeInTheDocument()
		})

		await step('Render icon', () => {
			waitFor(() => {
				const svg = canvas.getByRole('img')
				expect(svg).toBeInTheDocument()
			})
		})
	}
}

