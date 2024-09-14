'use client'
import { Section } from '@/components/Section'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { SliderConfigProps } from './BannersSlider'

export interface TextSliderItemProps {
	title: string
	description: string
}

export interface SectionBenefitsProps {
	title: string
	benefits: TextSliderItemProps[]
	sliderConfig: SliderConfigProps
}

export function SectionBenefits({ title, benefits, sliderConfig }: SectionBenefitsProps) {
	var settings = {
		autoplay: true,
		autoplaySpeed: sliderConfig.scrollSpeed ?? 5000,
		arrows: false,
		dots: true,
		dotsClass: 'custom-dots',
		fade: sliderConfig.effect === 'fade' ? true : false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: sliderConfig.transitionSpeed ?? 500
	}

	return (
		<Section theme='dark' title={title}>
			<Slider {...settings}>
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
