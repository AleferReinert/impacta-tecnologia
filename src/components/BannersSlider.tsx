'use client'
import { StrapiImageUpload } from '@/app/layout'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { Button } from './Button'
import { Container } from './Container'

export interface SliderConfigProps {
	effect?: string
	scrollSpeed?: number
	transitionSpeed?: number
}

export interface BannerSliderProps {
	banners: {
		title: string
		description: string
		img: StrapiImageUpload
		url?: string
		align?: 'centro' | 'direita' | 'esquerda'
		buttonLabel?: string
	}[]
	sliderConfig: SliderConfigProps
}

export function BannersSlider({ sliderConfig, banners }: BannerSliderProps) {
	if (banners.length === 0) {
		return null
	}

	const aligns: { [key: string]: string } = {
		centro: 'text-center',
		direita: 'text-right',
		esquerda: 'text-left'
	}
	var settings: Settings = {
		adaptiveHeight: banners.length === 1 ? true : false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: sliderConfig.scrollSpeed ?? 5000,
		dots: banners.length > 1 ? true : false,
		dotsClass: 'custom-dots banners-dots',
		fade: sliderConfig.effect === 'fade' ? true : false,
		infinite: true,
		pauseOnHover: false,
		speed: sliderConfig.transitionSpeed ?? 1000
	}

	const screenWidth = typeof window !== 'undefined' ? window.screen.width : 0

	return (
		<section className='relative bg-secondary'>
			<Slider {...settings}>
				{banners.map((banner, index) => {
					const background =
						screenWidth <= 640
							? banner.img.data.attributes.formats.small.url
							: screenWidth <= 768
							? banner.img.data.attributes.formats.medium.url
							: screenWidth <= 1024
							? banner.img.data.attributes.formats.large.url
							: banner.img.data.attributes.url

					return (
						<div key={index} className='relative'>
							<div
								style={{ backgroundImage: `url(${background})` }}
								className='bg-cover bg-center aspect-[5/4] [&>div]:h-full sm:aspect-[3/2] md:aspect-[5/2] lg:aspect-[3/1]'
							>
								<Container>
									<div
										className={`${banner.align ? aligns[banner.align] : 'text-left'} ${
											banner.align === 'esquerda' ? 'sm:pr-10' : banner.align === 'direita' ? 'sm:pl-10' : ''
										} relative z-20 text-white h-full flex flex-col justify-center pb-3 sm:pb-6`}
									>
										<h2 className='font-semibold uppercase text-xl mb-2 font-heading sm:text-4xl'>
											{banner.title}
										</h2>
										<p className='font-light mb-7 sm:mb-10 text-sm sm:text-lg'>{banner.description}</p>
										<div className='h-10 [&_a]:inline-flex'>
											{banner.url && (
												<Button asLink href={banner.url} variant='outline-white' target='_blank'>
													{banner.buttonLabel || 'Saiba mais'}
												</Button>
											)}
										</div>
									</div>
								</Container>
							</div>
						</div>
					)
				})}
			</Slider>
		</section>
	)
}
