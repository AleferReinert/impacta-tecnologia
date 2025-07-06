import dynamic from 'next/dynamic'
import { ContactFormSkeleton } from '../ContactForm/ContactFormSkeleton'
import { Section } from '../Section/Section'

const ContactForm = dynamic(() => import('../ContactForm/ContactForm').then(mod => mod.ContactForm), {
	ssr: false,
	loading: () => <ContactFormSkeleton />
})

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
