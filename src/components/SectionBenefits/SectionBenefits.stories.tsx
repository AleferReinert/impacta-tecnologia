import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { SectionBenefits } from './SectionBenefits'

const meta: Meta<typeof SectionBenefits> = {
	title: 'Components/SectionBenefits',
	component: SectionBenefits,
	args: {
		title: 'Heading2',
		benefits: [
			{
				title: 'Title one',
				description: 'Description one'
			},
			{
				title: 'Title two',
				description: 'Description two'
			}
		],
		sliderConfig: {
			effect: 'Fade',
			scrollSpeed: '2300',
			transitionSpeed: '400'
		}
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Section Benefits',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const sectionTitle = canvas.getByRole('heading', { level: 2 })
		const benefitsTitle = canvas.getAllByRole('heading', { level: 3, hidden: true })
		const benefitsDescriptions = canvas.getAllByRole('paragraph', { hidden: true })

		await step('Render section title', () => {
			expect(sectionTitle).toHaveTextContent('Heading2')
		})

		await step('Render benefits: title and description', () => {
			expect(benefitsTitle.length).toBe(2)
			expect(benefitsDescriptions.length).toBe(2)
		})
	}
}

