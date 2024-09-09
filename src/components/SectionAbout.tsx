'use client'
import { Section } from '@/components/Section'
import { BsArrowRightShort } from 'react-icons/bs'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { Button } from './Button'

export interface SectionAboutProps {
	title: string
	descriptions: {
		description: string
	}[]
}

export function SectionAbout({ title, descriptions }: SectionAboutProps) {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		dotsClass: 'custom-dots'
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
			<Button asLink url='/sobre-nos'>
				Saiba mais
				<BsArrowRightShort className='w-5 h-5' />
			</Button>
		</Section>
	)
}
