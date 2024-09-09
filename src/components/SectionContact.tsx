import 'slick-carousel/slick/slick.css'
import { ContactForm } from './ContactForm'
import { Section } from './Section'

interface SectionContactProps {
	title: string
	description: string
}

export async function SectionContact() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/homepage?populate[contact][populate][0]=contact`
	const { data } = await fetch(url, { next: { revalidate: 3600 } }).then(res => res.json())
	const contact: SectionContactProps = data.attributes.contact

	return (
		<Section title={contact.title}>
			<p className='text-center mb-10 max-w-screen-sm mx-auto'>{contact.description}</p>
			<ContactForm />
		</Section>
	)
}
