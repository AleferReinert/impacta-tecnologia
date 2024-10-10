import { BoxContent, BoxContentProps } from '@/components/BoxContent/BoxContent'
import { Container } from '@/components/Container/Container'
import { DynamicReactIcon } from '@/components/DynamicReactIcon/DynamicReactIcon'
import { Error } from '@/components/Error/Error'
import { Loading } from '@/components/Loading/Loading'
import { PageTitle } from '@/components/PageTitle/PageTitle'
import { Subtitle } from '@/components/Subtitle/Subtitle'
import { SERVICESPAGE_QUERY } from '@/graphql/queries/Services'
import { client } from '@/utils/client'
import { Metadata } from 'next'

interface ServicesProps {
	lease: BoxContentProps
	servicesProvision: {
		title: string
		description: string
		services: {
			title: string
			description: string
			icon: string
		}[]
	}
	sale: BoxContentProps
}

async function fetchServicesData() {
	const response = await client.query({
		query: SERVICESPAGE_QUERY
	})
	return response
}

export const metadata: Metadata = {
	title: 'Serviços'
}

export default async function Services() {
	const { data, loading, error } = await fetchServicesData()

	if (loading) {
		return <Loading className='z-0' />
	}

	if (error) {
		console.log(`src/app/servicos/page.tsx: fetch error.`)
		return <Error title='Serviços' />
	}

	const { lease, servicesProvision, sale }: ServicesProps = data.servicespage.data.attributes

	return (
		<>
			<PageTitle title='Serviços' />
			<BoxContent icon={lease.icon} title={lease.title} description={lease.description} theme={lease.theme} />

			<div className='bg-slate-100 py-10'>
				<Container>
					<Subtitle title={servicesProvision.title} />
					<div className='mt-3 space-y-3' dangerouslySetInnerHTML={{ __html: servicesProvision.description }}></div>
					<ul className='py-3 gap-4 grid grid-cols-1 md:grid-cols-2'>
						{servicesProvision.services.map((item, index) => {
							return (
								<li key={index} className='p-8 gap-8 flex bg-slate-200 items-center'>
									<div className='hidden sm:block'>
										<DynamicReactIcon name={item.icon} className='size-10 fill-secondary text-secondary' />
									</div>
									<div>
										<h3 className='text-secondary font-medium'>{item.title}</h3>
										<p>{item.description}</p>
									</div>
								</li>
							)
						})}
					</ul>
				</Container>
			</div>
			<BoxContent icon={sale.icon} title={sale.title} description={sale.description} theme={sale.theme} />
		</>
	)
}
