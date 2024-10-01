import { gql } from '@apollo/client'

export const CONTACTPAGE_QUERY = gql`
	query Contact {
		homepage {
			data {
				attributes {
					contact {
						title
						description
					}
				}
			}
		}
	}
`
