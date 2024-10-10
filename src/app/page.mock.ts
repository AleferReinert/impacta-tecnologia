import { HomeProps } from './page'

export const homepageMock: HomeProps = {
	banners: {
		sliderConfig: {
			effect: 'Scroll',
			scrollSpeed: 'Longo_3_5_segundos',
			transitionSpeed: 'Lento_0_75_segundos'
		},
		banners: [
			{
				title: 'Lorem ipsum dolor sit',
				description: 'Dolor sit amet consectetur adipiscing',
				img: {
					data: {
						attributes: {
							url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/1_2d7fb2baa9.webp',
							mime: 'image/webp',
							width: 800,
							height: 600,
							formats: {
								thumbnail: {
									url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/thumbnail_1.webp'
								},
								small: {
									url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/small_1.webp'
								},
								medium: {
									url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/medium_1.webp'
								},
								large: {
									url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/large_1.webp'
								}
							}
						}
					}
				},
				align: 'esquerda',
				buttonLabel: 'Saiba mais'
			},
			{
				title: 'Donec eget ante orci',
				description: 'Vestibulum sollicitudin elit diam',
				img: {
					data: {
						attributes: {
							url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/2_191b9da425.webp',
							mime: 'image/webp',
							width: 800,
							height: 600,
							formats: {
								thumbnail: {
									url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/thumbnail_2.webp'
								},
								small: {
									url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/small_2.webp'
								},
								medium: {
									url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/medium_2.webp'
								},
								large: {
									url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/large_2.webp'
								}
							}
						}
					}
				},
				url: 'https://google.com',
				align: 'esquerda',
				buttonLabel: 'Saiba mais'
			},
			{
				title: 'Quisque congue dolor leo',
				description: 'Maecenas ut ipsum in nunc tristique porttitor',
				img: {
					data: {
						attributes: {
							url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/3_5567203ecb.webp',
							mime: 'image/webp',
							width: 800,
							height: 600,
							formats: {
								thumbnail: {
									url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/thumbnail_3.webp'
								},
								small: {
									url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/small_3.webp'
								},
								medium: {
									url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/medium_3.webp'
								},
								large: {
									url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/large_3.webp'
								}
							}
						}
					}
				},
				align: 'esquerda',
				buttonLabel: 'Saiba mais'
			}
		]
	},
	about: {
		title: 'Sobre nós',
		descriptions: [
			{ description: 'Lorem ipsum dolor sit amet.' },
			{ description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
		],
		sliderConfig: {
			effect: 'Fade',
			scrollSpeed: 'Longo_3_5_segundos',
			transitionSpeed: 'Lento_0_75_segundos'
		}
	},
	services: {
		title: 'Nossos Serviços',
		services: [
			{ title: 'Serviço 1', description: 'Descrição do serviço 1', icon: 'FaDatabase' },
			{ title: 'Serviço 2', description: 'Descrição do serviço 2', icon: 'FaFan' },
			{ title: 'Serviço 3', description: 'Descrição do serviço 3', icon: 'FaKey' }
		]
	},
	benefits: {
		title: 'Nossos Benefícios',
		benefits: [
			{ title: 'Benefício 1', description: 'Descrição do benefício 1' },
			{ title: 'Benefício 2', description: 'Descrição do benefício 2' }
		],
		sliderConfig: {
			effect: 'Scroll',
			scrollSpeed: 'Longo_3_5_segundos',
			transitionSpeed: 'Lento_0_75_segundos'
		}
	},
	contact: {
		title: 'Entre em Contato',
		description: 'Descrição sobre como entrar em contato.'
	}
}
