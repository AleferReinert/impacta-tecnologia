import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Subtitle } from './Subtitle'

const meta: Meta<typeof Subtitle> = {
	title: 'Components/Subtitle',
	component: Subtitle,
	args: {
		title: 'Dolor sit amet'
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Subtitle',
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const title = canvas.getByRole('heading')

		expect(title).toHaveTextContent('Dolor sit amet')
	}
}

