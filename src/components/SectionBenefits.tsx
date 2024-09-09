'use client'
import { Section } from '@/components/Section'
import 'slick-carousel/slick/slick.css'
import { TextSlider, TextSliderItemProps } from './TextSlider'

export interface SectionBenefitsProps {
	title: string
	benefits: TextSliderItemProps[]
}

export function SectionBenefits({ title, benefits }: SectionBenefitsProps) {
	return (
		<Section theme='dark' title={title}>
			<TextSlider items={benefits} />
		</Section>
	)
}
