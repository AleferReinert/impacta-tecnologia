import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import tailwindConfig from '../../../tailwind.config'
import { SocialLinks } from './SocialLinks'
import { SocialLinksMock } from './SocialLinks.mock'

const meta: Meta<typeof SocialLinks> = {
	title: 'Components/SocialLinks',
	component: SocialLinks,
	args: {
		socialLinks: SocialLinksMock
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Light (default)',
	parameters: {
		backgrounds: {
			default: 'Dark'
		}
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Render links: title, url, icon', () => {
			waitFor(() => {
				const svg = canvas.getAllByRole('img')
				const socialMediaLinks = ['Facebook', 'Instagram', 'Whatsapp']

				socialMediaLinks.forEach(name => {
					const link = canvas.getByRole('link', { name })
					expect(link).toHaveAttribute('href')
				})
				expect(svg.length).toBe(3)
			})
		})

		await step('Icons white as default', () => {
			waitFor(() => {
				const svg = canvas.getAllByRole('img')[0]
				expect(svg).toHaveStyle({ fill: '#fff' })
			})
		})
	}
}

export const Dark: Story = {
	args: {
		iconColor: 'dark'
	},
	play: ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		step('Icons dark', () => {
			waitFor(() => {
				const svg = canvas.getAllByRole('img')[0]
				expect(svg).toHaveStyle({ fill: tailwindConfig.theme.extend.colors.secondary })
			})
		})
	}
}

