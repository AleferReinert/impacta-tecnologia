import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { SectionContact } from './SectionContact'

const meta: Meta<typeof SectionContact> = {
	title: 'Components/SectionContact',
	component: SectionContact,
	args: {
		title: 'Heading2',
		description: 'Lorem ipsum dolor.'
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'SectionContact',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const title = canvas.getByRole('heading', { level: 2 })
		const description = canvas.getByRole('paragraph')
		const form = canvas.getByTestId('ContactFormComponent')

		step('Render title, description and form', () => {
			expect(title).toHaveTextContent('Heading2')
			expect(description).toHaveTextContent('Lorem ipsum dolor.')
			expect(form).toBeInTheDocument()
		})
	}
}

