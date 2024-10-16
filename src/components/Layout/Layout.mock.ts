import { EnterpriseProps } from '@/app/layout'

export const EnterpriseMock: EnterpriseProps = {
	name: 'John Doe Corporation',
	description: 'Lorem ipsum dolor',
	email: 'john.doe.corporation@example.com',
	phone: '47999557722',
	businessHours: { title: 'Seg. a sexta', content: '8h as 18h' },
	cnpj: '98987987000198',
	logo: {
		data: {
			attributes: {
				url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/logo_50a34a664c.webp'
			}
		}
	},
	favicon: {
		data: {
			attributes: {
				url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/favicon_621b2e2463.png',
				mime: 'image/png',
				width: 32,
				height: 32
			}
		}
	},
	socialLinks: []
}

// export const LogoMock = {
// 	data: {
// 		attributes: {
// 			url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/logo_50a34a664c.webp'
// 		}
// 	}
// }

// export const FaviconMock = {
// 	data: {
// 		attributes: {
// 			url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/favicon_621b2e2463.png',
// 			mime: 'image/png',
// 			width: 32,
// 			height: 32
// 		}
// 	}
// }
