import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { SocialLinksMock } from '../SocialLinks/SocialLinks.mock'
import { EnterpriseMock } from './Enterprise.mock'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
	title: 'Components/Footer',
	component: Footer,
	args: {
		enterprise: EnterpriseMock
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Render column enterprise: name, business hours and cnpj', () => {
			const name = canvas.getByText('John Doe Corporation')
			const cnpj = canvas.getByText('CNPJ: 98.987.987/0001-98')
			const businessHours = canvas.getByText('Seg. a sexta: 8h as 18h')
			expect(name).toBeInTheDocument()
			expect(businessHours).toBeInTheDocument()
			expect(cnpj).toBeInTheDocument()
		})

		await step('Render column contact: title, phone and email', () => {
			const headingContact = canvas.getByRole('heading', { name: 'Contato' })
			const phone = canvas.getByRole('link', { name: '(47) 99955-7722' })
			const email = canvas.getByRole('link', { name: 'john.doe.corporation@example.com' })
			expect(headingContact).toBeInTheDocument()
			expect(phone).toHaveAttribute('href', 'tel:47999557722')
			expect(email).toHaveAttribute('href', 'mailto:john.doe.corporation@example.com')
		})
	}
}

export const WithSocialLinks: Story = {
	args: {
		enterprise: {
			...EnterpriseMock,
			socialLinks: SocialLinksMock
		}
	},
	play: ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		step('Render column social: title and links', () => {
			const headingSocial = canvas.getByRole('heading', { name: 'Social' })
			const socialLinks = canvas.getByTestId('SocialLinksComponent')
			expect(headingSocial).toBeInTheDocument()
			expect(socialLinks).toBeInTheDocument()
		})
	}
}

