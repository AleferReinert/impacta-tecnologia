import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { SectionServices } from './SectionServices'

const meta: Meta<typeof SectionServices> = {
	title: 'Components/SectionServices',
	component: SectionServices,
	args: {
		title: 'Heading2',
		services: [
			{
				title: 'Title one',
				description: 'Description one',
				icon: 'FaDatabase'
			},
			{
				title: 'Title two',
				description: 'Description two',
				icon: 'FaFan'
			},
			{
				title: 'Title three',
				description: 'Description three',
				icon: 'FaKey'
			}
		]
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Section Services',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Render section title and button link', () => {
			const sectionTitle = canvas.getByRole('heading', { level: 2 })
			const buttonLink = canvas.getByRole('link', { name: 'Saiba mais' })
			expect(sectionTitle).toHaveTextContent('Heading2')
			expect(buttonLink).toBeInTheDocument()
		})

		await step('Render 3 services: title, description and icon', () => {
			const servicesTitle = canvas.getAllByRole('heading', { level: 3 })
			const servicesDescription = canvas.getAllByRole('paragraph')
			expect(servicesTitle.length).toBe(3)
			expect(servicesDescription.length).toBe(3)
			waitFor(() => {
				const servicesIcon = canvas.getAllByRole('img')
				expect(servicesIcon.length).toBe(3)
			})
		})
	}
}

