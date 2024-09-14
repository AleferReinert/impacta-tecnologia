import 'slick-carousel/slick/slick.css'
import { ContactForm } from './ContactForm'
import { Section } from './Section'

export interface SectionContactProps {
	title: string
	description: string
}

export async function SectionContact({ title, description }: SectionContactProps) {
	const renderInfo = (label: string, value?: string) => {
		if (!value) return null
		return (
			<>
				<span className='font-medium text-secondary'>{label}</span>
				{value}
				<br />
			</>
		)
	}

	return (
		<Section title={title}>
			<p className='text-center mb-10 max-w-screen-sm mx-auto'>{description}</p>
			<ContactForm />
		</Section>
	)
}
