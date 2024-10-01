import { gql } from '@apollo/client'

export const SLIDER_CONFIG_FRAGMENT = gql`
	fragment SliderConfig on ComponentComponentsSlider {
		effect
		transitionSpeed
		scrollSpeed
	}
`
