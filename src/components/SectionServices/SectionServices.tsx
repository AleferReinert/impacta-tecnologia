import { Section } from '@/components/Section/Section'
import dynamic from 'next/dynamic'
import { BsArrowRightShort } from 'react-icons/bs'
import { Button } from '../Button/Button'

const DynamicReactIcon = dynamic(
	() => import('../DynamicReactIcon/DynamicReactIcon').then(mod => mod.DynamicReactIcon),
	{ ssr: false }
)

export interface SectionServicesProps {
	title: string
	services: {
		title: string
		description: string
		icon: string
	}[]
}

export function SectionServices({ title, services }: SectionServicesProps) {
	return (
		<Section title={title} data-testid='SectionServicesComponent'>
			<ul className='gap-10 grid grid-cols-1 md:grid-cols-3 mt-10 mb-10'>
				{services.map((service, index) => {
					return (
						<li key={index} className='text-center'>
							<div className='border rounded-full flex justify-center w-40 h-40 items-center mx-auto mb-4 border-secondary'>
								<DynamicReactIcon aria-hidden name={service.icon} className='size-16 fill-secondary' />
							</div>
							<h3 className='font-semibold text-secondary'>{service.title}</h3>
							<p>{service.description}</p>
						</li>
					)
				})}
			</ul>
			<Button asLink href='/servicos'>
				Saiba mais
				<BsArrowRightShort className='w-5 h-5' />
			</Button>
		</Section>
	)
}
