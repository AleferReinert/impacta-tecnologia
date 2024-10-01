import { gql } from '@apollo/client'

export const BOX_CONTENT_FRAGMENT = gql`
	fragment BoxContent on ComponentComponentsBoxContent {
		title
		description
		icon
		theme
	}
`
