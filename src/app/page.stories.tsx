import { HOMEPAGE_QUERY } from '@/graphql/queries/Home'
import { MockedProvider } from '@apollo/client/testing'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import Home from './page'
import { homepageMock } from './page.mock'

const mocks = [
	{
		request: {
			query: HOMEPAGE_QUERY
		},
		result: {
			data: {
				homepage: {
					data: {
						attributes: homepageMock
					}
				}
			}
		}
	}
]

const meta: Meta<typeof Home> = {
	title: 'Pages/Home',
	component: Home,
	decorators: story => (
		<MockedProvider mocks={mocks} addTypename={false}>
			{story()}
		</MockedProvider>
	)
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Home',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Render BannersSlider', () => {
			waitFor(() => {
				const BannersSliderComponent = canvas.getByTestId('BannersSliderComponent')
				expect(BannersSliderComponent).toBeInTheDocument()
			})
		})

		await step('Render SectionAbout', () => {
			waitFor(() => {
				const SectionAboutComponent = canvas.getByTestId('SectionAboutComponent')
				expect(SectionAboutComponent).toBeInTheDocument()
			})
		})

		await step('Render SectionServices', () => {
			waitFor(() => {
				const SectionServicesComponent = canvas.getByTestId('SectionServicesComponent')

				expect(SectionServicesComponent).toBeInTheDocument()
			})
		})

		await step('Render SectionBenefits', () => {
			waitFor(() => {
				const SectionBenefitsComponents = canvas.getByTestId('SectionBenefitsComponents')
				expect(SectionBenefitsComponents).toBeInTheDocument()
			})
		})

		await step('Render  SectionContact', () => {
			waitFor(() => {
				const SectionContactComponent = canvas.getByTestId('SectionContactComponent')
				expect(SectionContactComponent).toBeInTheDocument()
			})
		})
	}
}

