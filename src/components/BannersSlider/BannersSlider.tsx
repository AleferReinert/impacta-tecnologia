'use client'
import { StrapiImageUpload } from '@/app/layout'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { tv } from 'tailwind-variants'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import { SliderConfigProps, SliderSettings } from '../SliderSettings'

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

const bannerStyles = tv({
	base: 'relative z-20 text-white h-full flex flex-col justify-center pb-3 sm:pb-6',
	variants: {
		align: {
			centro: 'text-center',
			direita: 'text-right sm:pl-10',
			esquerda: 'text-left sm:pr-10'
		}
	},
	defaultVariants: {
		align: 'esquerda'
	}
})

export function BannersSlider({ sliderConfig, banners }: BannerSliderProps) {
	const [screenWidth, setScreenWidth] = useState(0)

	useEffect(() => {
		setScreenWidth(window.screen.width)
	}, [])

	if (banners.length === 0) {
		return null
	}

	const { effect, scrollSpeed, transitionSpeed } = sliderConfig

	return (
		<section className='relative bg-secondary' data-testid='BannersSliderComponent'>
			<Slider
				{...SliderSettings({
					itemsLength: banners.length,
					dotsClass: 'banners-dots',
					effect,
					scrollSpeed,
					transitionSpeed
				})}
			>
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
									<div className={bannerStyles({ align: banner.align })}>
										<h2 className='font-semibold uppercase text-xl mb-2 font-heading sm:text-4xl'>{banner.title}</h2>
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
