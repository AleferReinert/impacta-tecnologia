'use client'
import { Section } from '@/components/Section'
import { BsArrowRightShort } from 'react-icons/bs'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { SliderConfigProps } from './BannersSlider'
import { Button } from './Button'

export interface SectionAboutProps {
	title: string
	descriptions: {
		description: string
	}[]
	sliderConfig: SliderConfigProps
}

export function SectionAbout({ title, descriptions, sliderConfig }: SectionAboutProps) {
	var settings = {
		autoplay: true,
		autoplaySpeed: sliderConfig.scrollSpeed ?? 5000,
		arrows: false,
		dots: true,
		dotsClass: 'custom-dots',
		fade: sliderConfig.effect === 'fade' ? true : false,
		infinite: true,
		slidesToScroll: 1,
		slidesToShow: 1,
		speed: sliderConfig.transitionSpeed ?? 500
	}

	return (
		<Section title={title} theme='dark'>
			<div className='mb-10'>
				<Slider {...settings}>
					{descriptions.map((item, index) => (
						<div key={index} className='text-center'>
							<p className='max-w-screen-sm mx-auto'>{item.description}</p>
						</div>
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
