'use client'
import { Section } from '@/components/Section/Section'
import { SwiperSlide } from 'swiper/react'
import { Slider, SliderConfigProps } from '../Slider/Slider'

export interface SectionBenefitsProps {
	title: string
	benefits: {
		title: string
		description: string
	}[]
	sliderConfig: SliderConfigProps
}

export function SectionBenefits({ title, benefits, sliderConfig }: SectionBenefitsProps) {
	return (
		<Section theme='dark' title={title} data-testid='SectionBenefitsComponents'>
			<Slider {...sliderConfig}>
				{benefits.map((item, index) => (
					<SwiperSlide key={index} className='text-center flex flex-col'>
						<h3 className='font-semibold text-secondary'>{item.title}</h3>
						<p className='max-w-screen-sm mx-auto'>{item.description}</p>
					</SwiperSlide>
				))}
			</Slider>
		</Section>
	)
}
