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

export const Default: Story = {
	args: {
		banners: [bannersMock.banners[0]]
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		/* 
			Por padrão deve:
			- Ter titulo, descrição e background
			- Não mostrar botão de link
			- Estar alinhado a esquerda
			- Não exibir os circulos de navegação
		*/
		await waitFor(() => {
			const title = canvas.getByRole('heading')
			const description = canvas.getByRole('paragraph')
			const button = canvas.queryByRole('link')
			const background = document.querySelector('.bg-cover')
			const dots = document.querySelector('.custom-dots')

			expect(title).toHaveTextContent('Lorem ipsum dolor sit')
			expect(description).toHaveTextContent('Dolor sit amet consectetur adipiscing')
			expect(button).not.toBeInTheDocument()
			expect(background?.firstChild?.firstChild).toHaveClass('text-left')
			expect(background).toHaveStyle(`background-image: url(${bannersMock.banners[0].img.data.attributes.url})`)
			expect(dots).not.toBeInTheDocument()
		})
	}
}

export const All: Story = {
	args: {
		banners: bannersMock.banners
	},
	play: async () => {
		await waitFor(() => {
			const dots = document.querySelector('.custom-dots')
			expect(dots).toBeInTheDocument()
		})
	}
}

