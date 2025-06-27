import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Layout } from './Layout'
import { EnterpriseMock } from './Layout.mock'

const meta: Meta<typeof Layout> = {
	title: 'Layout/Main',
	component: Layout,
	args: {
		enterprise: EnterpriseMock,
		children: <p className='text-center py-10'>children</p>
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Render <Header />', () => {
			const HeaderComponent = canvas.getByTestId('HeaderComponent')
			expect(HeaderComponent).toBeInTheDocument()
		})

		await step('Render children', () => {
			const children = canvas.getByText(/children/)
			expect(children).toBeInTheDocument()
		})

		await step('Render <Footer />', () => {
			const FooterComponent = canvas.getByTestId('FooterComponent')
			expect(FooterComponent).toBeInTheDocument()
		})
	}
}

