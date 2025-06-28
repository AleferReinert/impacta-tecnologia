'use client'
import { convertToMilliseconds } from '@/utils/convertToMilliseconds'
import { ReactNode } from 'react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'

export interface SliderConfigProps {
	effect: 'Fade' | 'Scroll'
	scrollSpeed: string
	transitionSpeed: string
	dotsTheme?: 'light' | 'dark'
}

export interface SliderProps extends SliderConfigProps {
	children: ReactNode
}

export function Slider({ children, effect, scrollSpeed, transitionSpeed, dotsTheme = 'dark' }: SliderProps) {
	return (
		<Swiper
			loop
			pagination={{
				clickable: true,
				renderBullet: function (index, className) {
					return `<button class='${className} ${dotsTheme}'><span></span></button>`
				}
			}}
			modules={[Pagination, Autoplay, EffectFade]}
			autoplay={{
				delay: scrollSpeed ? convertToMilliseconds(scrollSpeed) : 5000,
				pauseOnMouseEnter: true,
				disableOnInteraction: false
			}}
			effect={effect === 'Fade' ? 'fade' : 'slide'}
			speed={transitionSpeed ? convertToMilliseconds(transitionSpeed) : 500}
		>
			{children}
		</Swiper>
	)
}
