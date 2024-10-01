import { StrapiImageUpload } from '@/app/layout'

export const bannersMock = {
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
								url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/1_thumbnail.webp'
							},
							small: {
								url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/1_small.webp'
							},
							medium: {
								url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/1_medium.webp'
							},
							large: {
								url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/1_large.webp'
							}
						}
					}
				}
			} as StrapiImageUpload
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
								url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/2_thumbnail.webp'
							},
							small: {
								url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/2_small.webp'
							},
							medium: {
								url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/2_medium.webp'
							},
							large: {
								url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/2_large.webp'
							}
						}
					}
				}
			} as StrapiImageUpload,
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
						url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/3_5567203ecb.webp',
						mime: 'image/webp',
						width: 800,
						height: 600,
						formats: {
							thumbnail: {
								url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/3_thumbnail.webp'
							},
							small: {
								url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/3_small.webp'
							},
							medium: {
								url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/3_medium.webp'
							},
							large: {
								url: 'https://res.cloudinary.com/devalefer/image/upload/v1727146043/impacta-tecnologia/dev/3_large.webp'
							}
						}
					}
				}
			} as StrapiImageUpload,
			align: 'esquerda' as 'esquerda' | 'centro' | 'direita',
			url: 'https://example.com',
			buttonLabel: 'Saiba mais'
		}
	]
}
