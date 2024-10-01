import { gql } from '@apollo/client'
import { BOX_CONTENT_FRAGMENT } from '../fragments/BoxContent'

export const SERVICESPAGE_QUERY = gql`
	${BOX_CONTENT_FRAGMENT}

	query servicespage {
		servicespage {
			data {
				attributes {
					lease {
						...BoxContent
					}
					servicesProvision {
						title
						description
						services {
							title
							description
							icon
						}
					}
					sale {
						...BoxContent
					}
				}
			}
		}
	}
`
