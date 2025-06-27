import { gql } from '@apollo/client'
import { SLIDER_CONFIG_FRAGMENT } from '../fragments/SliderConfig'

export const HOMEPAGE_QUERY = gql`
	${SLIDER_CONFIG_FRAGMENT}

	query Home {
		homepage {
			data {
				attributes {
					banners {
						sliderConfig {
							...SliderConfig
						}
						banners {
							title
							description
							img {
								data {
									attributes {
										url
									}
								}
							}
							url
							align
							buttonLabel
						}
					}
					about {
						title
						descriptions {
							description
						}
						sliderConfig {
							...SliderConfig
						}
					}
					services {
						title
						services {
							title
							description
							icon
						}
					}
					benefits {
						title
						benefits {
							title
							description
						}
						sliderConfig {
							...SliderConfig
						}
					}
					contact {
						title
						description
					}
				}
			}
		}
	}
`
