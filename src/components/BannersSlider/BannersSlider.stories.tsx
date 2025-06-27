import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { BannersSlider } from './BannersSlider'
import { bannersMock } from './BannersSlider.mock'

const meta: Meta<typeof BannersSlider> = {
	title: 'Components/BannersSlider',
	component: BannersSlider,
	args: {
		sliderConfig: {
			effect: 'Fade',
			scrollSpeed: '5000',
			transitionSpeed: '1000'
		}
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const OnlyOne: Story = {
	args: {
		banners: [bannersMock[0]]
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Render h2 and description', () => {
			waitFor(() => {
				const title = canvas.getByRole('heading', { level: 2 })
				const description = canvas.getByRole('paragraph')
				expect(title).toHaveTextContent('Lorem ipsum dolor sit')
				expect(description).toHaveTextContent('Dolor sit amet consectetur adipiscing')
			})
		})

		await step('Align to left', () => {
			waitFor(() => {
				const div = document.querySelector('.bg-cover')?.firstChild?.firstChild
				expect(div).toHaveClass('text-left')
			})
		})

		await step('Do not show link button and dots', () => {
			waitFor(() => {
				const background = document.querySelector('.bg-cover')
				const dots = document.querySelector('.custom-dots')
				expect(background).toHaveStyle(`background-image: url(${bannersMock[0].img.data.attributes.url})`)
				expect(dots).not.toBeInTheDocument()
			})
		})
	}
}

export const Multiples: Story = {
	args: {
		banners: bannersMock
	},
	play: async ({ step }) => {
		step('Render dots', () => {
			waitFor(() => {
				const dots = document.querySelector('.custom-dots')
				expect(dots).toBeInTheDocument()
			})
		})
	}
}

