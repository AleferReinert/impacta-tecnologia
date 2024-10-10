'use client'
import { Section } from '@/components/Section/Section'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { SliderConfigProps, SliderSettings } from '../SliderSettings'

export interface SectionBenefitsProps {
	title: string
	benefits: {
		title: string
		description: string
	}[]
	sliderConfig: SliderConfigProps
}

export function SectionBenefits({ title, benefits, sliderConfig }: SectionBenefitsProps) {
	const { effect, scrollSpeed, transitionSpeed } = sliderConfig

	return (
		<Section theme='dark' title={title} data-testid='SectionBenefitsComponents'>
			<Slider {...SliderSettings({ itemsLength: benefits.length, effect, scrollSpeed, transitionSpeed })}>
				{benefits.map((item, index) => (
					<div key={index} className='text-center flex flex-col'>
						<h3 className='font-semibold text-secondary'>{item.title}</h3>
						<p className='max-w-screen-sm mx-auto'>{item.description}</p>
					</div>
				))}
			</Slider>
		</Section>
	)
}
