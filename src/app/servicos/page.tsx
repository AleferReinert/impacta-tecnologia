import { BoxContent, BoxContentProps } from '@/components/BoxContent'
import { Container } from '@/components/Container'
import { DynamicIcon } from '@/components/DynamicIcon'
import { Layout } from '@/components/Layout'
import { PageTitle } from '@/components/PageTitle'
import { Subtitle } from '@/components/Subtitle'

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

export default async function Services() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/servicespage?populate[lease][populate][0]=lease&populate[servicesProvision][populate][0]=services&populate[sale][populate][0]=sale`
	const res = await fetch(url, { next: { revalidate: 3600 } }).then(res => res.json())
	const { lease, servicesProvision, sale }: ServicesProps = res.data.attributes

	return (
		<Layout>
			<PageTitle>Serviços</PageTitle>

			<BoxContent
				icon={lease.icon}
				title={lease.title}
				description={lease.description}
				variant={lease.variant}
			/>

			<div className='bg-slate-100 py-10'>
				<Container>
					<Subtitle>{servicesProvision.title}</Subtitle>
					<div
						className='mt-3 space-y-3'
						dangerouslySetInnerHTML={{ __html: servicesProvision.description }}
					></div>
					<ul className='py-3 gap-4 grid grid-cols-1 md:grid-cols-2'>
						{servicesProvision.services.map((item, index) => {
							return (
								<li key={index} className='p-8 gap-8 flex bg-slate-200 items-center'>
									<div className='hidden sm:block [&_svg]:size-10 [&_svg]:fill-secondary [&_svg]:text-secondary'>
										<DynamicIcon icon={item.icon} />
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
			<BoxContent icon={sale.icon} title={sale.title} description={sale.description} variant={sale.variant} />
		</Layout>
	)
}
