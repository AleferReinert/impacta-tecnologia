import { BoxContent, BoxContentProps } from '@/components/BoxContent/BoxContent'
import { Container } from '@/components/Container/Container'
import { DynamicReactIcon } from '@/components/DynamicReactIcon/DynamicReactIcon'
import { Error } from '@/components/Error/Error'
import { PageTitle } from '@/components/PageTitle/PageTitle'
import { Subtitle } from '@/components/Subtitle/Subtitle'
import { ABOUTPAGE_QUERY } from '@/graphql/queries/About'
import { client } from '@/utils/client'
import { Metadata } from 'next'

interface AboutProps {
	description: string
	mission: BoxContentProps
	vision: BoxContentProps
	values: {
		title: string
		values: {
			title: string
			description: string
			icon: string
		}[]
	}
}

export const metadata: Metadata = {
	title: 'Sobre nós'
}

export default async function About() {
	const { data, error } = await client.query({ query: ABOUTPAGE_QUERY })
	const { description, mission, vision, values }: AboutProps = data.aboutpage.data.attributes

	if (error) {
		console.error(`src/app/sobre-nos/page.tsx - Error: ${error.message}`)
		return <Error title='Sobre nós' />
	}

	return (
		<>
			<PageTitle title='Sobre nós' />
			<Container>
				<div
					dangerouslySetInnerHTML={{ __html: description }}
					className='text-center py-10 leading-loose [&_strong]:text-secondary [&_strong]:font-semibold'
				></div>
			</Container>

			<BoxContent theme={mission.theme} icon={mission.icon} title={mission.title} description={mission.description} />

			<BoxContent theme={vision.theme} icon={vision.icon} title={vision.title} description={vision.description} />

			<div className='bg-slate-100 py-10'>
				<Container>
					<Subtitle title={values.title} />
					<ul className='py-3 gap-4 mt-3'>
						{values.values.map((item, index) => {
							return (
								<li
									key={index}
									className='p-8 gap-8 odd:bg-slate-200 flex items-center border-l-4 even:border-transparent odd:border-secondary'
								>
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
		</>
	)
}
