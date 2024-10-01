import { gql } from '@apollo/client'
import { BOX_CONTENT_FRAGMENT } from '../fragments/BoxContent'

export const ABOUTPAGE_QUERY = gql`
	${BOX_CONTENT_FRAGMENT}

	query About {
		aboutpage {
			data {
				attributes {
					description
					mission {
						...BoxContent
					}
					vision {
						...BoxContent
					}
					values {
						title
						values {
							title
							description
							icon
						}
					}
				}
			}
		}
	}
`
