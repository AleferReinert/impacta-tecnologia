'use client'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import { tv } from 'tailwind-variants'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import { Slider, SliderConfigProps } from '../Slider/Slider'

export interface BannerProps {
	title: string
	description: string
	img: {
		data: {
			attributes: {
				url: string
			}
		}
	}
	url?: string
	align?: 'centro' | 'direita' | 'esquerda'
	buttonLabel?: string
}

export interface BannerSliderProps {
	banners: BannerProps[]
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

export function BannersSlider({ banners, sliderConfig }: BannerSliderProps) {
	if (banners.length === 0) {
		return null
	}

	return (
		<section className='relative bg-secondary' data-testid='BannersSliderComponent'>
			<Slider {...sliderConfig} dotsTheme='light'>
				{banners.map((banner, index) => {
					return (
						<SwiperSlide key={index} className='relative'>
							<div className='relative aspect-[5/4] [&>div]:h-full sm:aspect-[3/2] md:aspect-[5/2] lg:aspect-[3/1]'>
								<Image
									src={banner.img.data.attributes.url}
									alt=''
									aria-hidden
									fill
									className='object-cover'
									priority={index === 0}
								/>
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
						</SwiperSlide>
					)
				})}
			</Slider>
		</section>
	)
}
