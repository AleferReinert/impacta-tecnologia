import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { PageTitle } from './PageTitle'

const meta: Meta<typeof PageTitle> = {
	title: 'Components/PageTitle',
	component: PageTitle,
	args: {
		title: 'Lorem ipsum'
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'PageTitle',
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const title = canvas.getByRole('heading')

		expect(title).toHaveTextContent('Lorem ipsum')
	}
}

