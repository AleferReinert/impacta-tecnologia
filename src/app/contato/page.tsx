import { ContactForm } from '@/components/ContactForm/ContactForm'
import { Container } from '@/components/Container/Container'
import { Error } from '@/components/Error/Error'
import { Loading } from '@/components/Loading/Loading'
import { PageTitle } from '@/components/PageTitle/PageTitle'
import { CONTACTPAGE_QUERY } from '@/graphql/queries/Contact'
import { client } from '@/utils/client'
import { Metadata } from 'next'

interface ContactProps {
	title: string
	description: string
}

async function fetchContactData() {
	const response = await client.query({
		query: CONTACTPAGE_QUERY
	})
	return response
}

export const metadata: Metadata = {
	title: 'Contato'
}

export default async function Contact() {
	const { data, loading, error } = await fetchContactData()

	if (loading) {
		return <Loading className='z-0' />
	}

	if (error) {
		console.log(`src/app/contato/page.tsx- Error: ${error.message}`)
		return <Error title='Contato' />
	}

	const { description }: ContactProps = data.homepage.data.attributes.contact

	return (
		<>
			<PageTitle title='Contato' />
			<Container>
				<div className='py-12'>
					<p className='text-center mb-10 max-w-screen-sm mx-auto'>{description}</p>
					<ContactForm />
				</div>
			</Container>
		</>
	)
}
