'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { Button } from './Button'
import { Container } from './Container'

interface BannerProps {
	title: string
	description: string
	img: string
	url?: string
	align?: 'text-left' | 'text-center' | 'text-right'
	buttonText?: string
}

const banners: BannerProps[] = [
	{
		title: 'Qualidade e Confiança',
		description: 'Lorem ipsum dolor sit amet consectetur.',
		img: '/banners/1.webp',
		url: 'http://google.com',
		align: 'text-left',
		buttonText: 'Visualizar'
	},
	{
		title: 'Cupom de desconto',
		description: 'Lorem ipsum dolor sit amet consectetur.',
		img: '/banners/2.webp',
		url: 'http://google.com',
		align: 'text-right',
		buttonText: 'Resgatar'
	},
	{
		title: 'Serviço Personalizado',
		description: 'Lorem ipsum dolor sit amet consectetur.',
		img: '/banners/3.webp',
		url: 'http://google.com',
		align: 'text-left',
		buttonText: 'Saiba mais'
	}
]

export function BannersSlider() {
	if (banners.length === 0) {
		return null
	}

	var settings = {
		dots: banners.length > 1 ? true : false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dotsClass: 'custom-dots banners-dots',
		adaptiveHeight: banners.length === 1 ? true : false
	}

	return (
		<div className='relative'>
			<Slider {...settings}>
				{banners.map((banner, index) => (
					<div key={index} className={`relative`}>
						<div style={{ backgroundImage: `url(${banner.img})` }} className='flex flex-col justify-center'>
							<Container>
								<div
									className={`relative z-20 text-white items-center pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-24 lg:pb-28 [&_a]:inline-flex ${banner.align}`}
								>
									<h2 className='font-semibold uppercase text-xl sm:text-4xl mb-2'>{banner.title}</h2>
									<p className='font-light mb-7 sm:mb-10 text-sm sm:text-lg'>{banner.description}</p>
									{banner.url && (
										<Button asLink url={banner.url} variant='outline-white'>
											{banner.buttonText || 'Saiba mais'}
										</Button>
									)}
								</div>
							</Container>
						</div>
						<div className='bg-secondary/80 absolute inset-0 z-10'></div>
					</div>
				))}
			</Slider>
		</div>
	)
}
