import { BoxContent, BoxContentProps } from '@/components/BoxContent'
import { Container } from '@/components/Container'
import DynamicReactIcon from '@/components/DynamicReactIcon'
import { Error } from '@/components/Error'
import { PageTitle } from '@/components/PageTitle'
import { Subtitle } from '@/components/Subtitle'
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

export const metadata: Metadata = {
	title: 'Serviços'
}

export default async function Services() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/servicepage?populate[lease]=*&populate[servicesProvision][populate][0]=services&populate[sale]=*`
	const res = await fetch(url, { next: { revalidate: 0 } })
	const data = await res.json()

	if (!res.ok) {
		return <Error />
	}

	const { lease, servicesProvision, sale }: ServicesProps = data.data.attributes

	return (
		<>
			<PageTitle title='Serviços' />
			<BoxContent icon={lease.icon} title={lease.title} description={lease.description} theme={lease.theme} />

			<div className='bg-slate-100 py-10'>
				<Container>
					<Subtitle>{servicesProvision.title}</Subtitle>
					<div className='mt-3 space-y-3' dangerouslySetInnerHTML={{ __html: servicesProvision.description }}></div>
					<ul className='py-3 gap-4 grid grid-cols-1 md:grid-cols-2'>
						{servicesProvision.services.map((item, index) => {
							return (
								<li key={index} className='p-8 gap-8 flex bg-slate-200 items-center'>
									<div className='hidden sm:block [&>*]:size-10 [&>*]:fill-secondary [&>*]:text-secondary'>
										<DynamicReactIcon name={item.icon} />
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
