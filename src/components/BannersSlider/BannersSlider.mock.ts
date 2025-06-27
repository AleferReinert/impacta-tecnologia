import { BannerProps } from './BannersSlider'

export const bannersMock: BannerProps[] = [
	{
		title: 'Lorem ipsum dolor sit',
		description: 'Dolor sit amet consectetur adipiscing',
		img: {
			data: {
				attributes: {
					url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/1_2d7fb2baa9.webp'
				}
			}
		}
	},
	{
		title: 'Donec eget ante orci',
		description: 'Vestibulum sollicitudin elit diam',
		img: {
			data: {
				attributes: {
					url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/2_191b9da425.webp'
				}
			}
		},
		align: 'esquerda' as 'esquerda' | 'centro' | 'direita',
		url: 'https://google.com',
		buttonLabel: 'Saiba mais'
	},
	{
		title: 'Quisque congue dolor leo',
		description: 'Maecenas ut ipsum in nunc tristique porttitor',
		img: {
			data: {
				attributes: {
					url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/3_5567203ecb.webp'
				}
			}
		},
		align: 'esquerda' as 'esquerda' | 'centro' | 'direita',
		url: 'https://example.com',
		buttonLabel: 'Saiba mais'
	}
]
