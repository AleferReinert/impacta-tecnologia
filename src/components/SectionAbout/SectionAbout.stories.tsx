import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { SectionAbout } from './SectionAbout'

const meta: Meta<typeof SectionAbout> = {
	title: 'Components/SectionAbout',
	component: SectionAbout,
	args: {
		title: 'Heading1',
		descriptions: [{ description: 'Lorem ipsum' }, { description: 'Dolor sit amet' }, { description: 'Consectetur adipiscing' }],
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
	name: 'Section About',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const title = canvas.getByRole('heading', { level: 1 })
		const descriptions = canvas.getAllByRole('paragraph', { hidden: true })
		const buttonLink = canvas.getByRole('link', { name: 'Saiba mais' })

		await step('Render h1, descriptions and button link', () => {
			expect(title).toHaveTextContent('Heading1')
			expect(descriptions.length).toBe(3)
			expect(buttonLink).toBeInTheDocument()
		})
	}
}

