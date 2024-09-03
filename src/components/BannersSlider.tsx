'use client'
import Image from 'next/image'
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
}

const banners: BannerProps[] = [
	{
		title: 'Qualidade e Confiança',
		description: 'Lorem ipsum dolor sit amet consectetur.',
		img: '/banners/1.webp',
		url: 'http://google.com',
		align: 'text-left'
	},
	{
		title: 'Economia Inteligente',
		description: 'Lorem ipsum dolor sit amet consectetur.',
		img: '/banners/2.webp',
		url: 'http://google.com',
		align: 'text-right'
	},
	{
		title: 'Serviço Personalizado',
		description: 'Lorem ipsum dolor sit amet consectetur.',
		img: '/banners/3.webp',
		url: 'http://google.com',
		align: 'text-left'
	}
]

export function BannersSlider() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dotsClass: 'custom-dots banners-dots'
	}
	return (
		<div className='relative'>
			<Slider {...settings}>
				{banners.map((banner, index) => (
					<div key={index} className='relative aspect-[3/1] !flex flex-col justify-center [&>div]:w-full'>
						<Container>
							<div
								className={`relative z-20 text-white items-center -translate-y-5 [&_a]:inline-flex ${banner.align}`}
							>
								<h2 className='font-black uppercase text-4xl mb-2'>{banner.title}</h2>
								<p className='font-light mb-10 text-lg'>{banner.description}</p>
								{banner.url && (
									<Button asLink url={banner.url} themeColor='white'>
										Saiba mais
									</Button>
								)}
							</div>
						</Container>
						<Image alt={banner.title} src={banner.img} fill />
						<div className='bg-secondary/80 absolute inset-0 z-10'></div>
					</div>
				))}
			</Slider>
		</div>
	)
}
