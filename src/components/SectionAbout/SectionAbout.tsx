'use client'
import { Section } from '@/components/Section/Section'
import { BsArrowRightShort } from 'react-icons/bs'
import { SwiperSlide } from 'swiper/react'
import { Button } from '../Button/Button'
import { Slider, SliderConfigProps } from '../Slider/Slider'

export interface SectionAboutProps {
	title: string
	descriptions: {
		description: string
	}[]
	sliderConfig: SliderConfigProps
}

export function SectionAbout({ title, descriptions, sliderConfig }: SectionAboutProps) {
	return (
		<Section title={title} headingLevel='h1' theme='dark' data-testid='SectionAboutComponent'>
			<div className='mb-8'>
				<Slider {...sliderConfig}>
					{descriptions.map((item, index) => (
						<SwiperSlide key={index} className='text-center'>
							<p className='max-w-screen-sm mx-auto'>{item.description}</p>
						</SwiperSlide>
					))}
				</Slider>
			</div>
			<Button asLink href='/sobre-nos'>
				Saiba mais
				<BsArrowRightShort className='w-5 h-5' />
			</Button>
		</Section>
	)
}
