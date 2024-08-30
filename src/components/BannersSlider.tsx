'use client'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

const banners = [
	{
		title: 'Qualidade e Confiança',
		url: 'http://google.com',
		img: '/banners/1.webp'
	},
	{
		title: 'Economia Inteligente',
		img: '/banners/2.webp'
	},
	{
		title: 'Serviço Personalizado',
		img: '/banners/3.webp'
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
		<Slider {...settings}>
			{banners.map((banner, index) =>
				banner.url ? (
					<a key={index} href={banner.url} target='_blank' className='relative aspect-[572/175]'>
						<Image alt={banner.title} src={banner.img} fill />
					</a>
				) : (
					<div key={index} className='relative aspect-[572/175]'>
						<Image alt={banner.title} src={banner.img} fill />
					</div>
				)
			)}
		</Slider>
	)
}
