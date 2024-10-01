import { gql } from '@apollo/client'

export const ENTERPRISE_QUERY = gql`
	query enterprise {
		enterprise {
			data {
				attributes {
					name
					description
					email
					phone
					cnpj
					businessHours {
						title
						content
					}
					logo {
						data {
							attributes {
								url
							}
						}
					}
					favicon {
						data {
							attributes {
								url
								mime
								width
								height
							}
						}
					}
					socialLinks {
						title
						url
						icon
					}
				}
			}
		}
	}
`
