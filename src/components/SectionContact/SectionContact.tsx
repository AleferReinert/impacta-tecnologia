import 'slick-carousel/slick/slick.css'
import { ContactForm } from '../ContactForm/ContactForm'
import { Section } from '../Section/Section'

export interface SectionContactProps {
	title: string
	description: string
}

export function SectionContact({ title, description }: SectionContactProps) {
	return (
		<Section title={title} data-testid='SectionContactComponent'>
			<p className='text-center mb-10 max-w-screen-sm mx-auto'>{description}</p>
			<ContactForm />
		</Section>
	)
}
