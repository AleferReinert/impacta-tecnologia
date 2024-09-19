'use client'
import { Section } from '@/components/Section'
import { BsArrowRightShort } from 'react-icons/bs'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { Button } from './Button'
import { SliderConfigProps, SliderSettings } from './SliderSettings'

export interface SectionAboutProps {
	title: string
	descriptions: {
		description: string
	}[]
	sliderConfig: SliderConfigProps
}

export function SectionAbout({ title, descriptions, sliderConfig }: SectionAboutProps) {
	const { effect, scrollSpeed, transitionSpeed } = sliderConfig

	return (
		<Section title={title} headingLevel='h1' theme='dark'>
			<div className='mb-10'>
				<Slider {...SliderSettings({ itemsLength: descriptions.length, effect, scrollSpeed, transitionSpeed })}>
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
