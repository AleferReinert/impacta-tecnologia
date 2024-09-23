import { BoxContent, BoxContentProps } from '@/components/BoxContent'
import { Container } from '@/components/Container'
import DynamicReactIcon from '@/components/DynamicReactIcon'
import { Error } from '@/components/Error'
import { PageTitle } from '@/components/PageTitle'
import { Subtitle } from '@/components/Subtitle'
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
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/aboutpage?populate[mission]=*&populate[vision]=*&populate[values][populate]=values`
	const res = await fetch(url, { next: { revalidate: 0 } })
	const data = await res.json()

	if (!res.ok) {
		console.log(`src/app/sobre-nos/page.tsx: fetch error.`)
		return <Error title='Sobre nós' />
	}

	const { description, mission, vision, values }: AboutProps = data.data.attributes

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
					<Subtitle>{values.title}</Subtitle>
					<ul className='py-3 gap-4 mt-3'>
						{values.values.map((item, index) => {
							return (
								<li
									key={index}
									className='p-8 gap-8 odd:bg-slate-200 flex items-center border-l-4 even:border-transparent odd:border-secondary'
								>
									<div className='hidden sm:block [&>*]:fill-secondary [&>*]:text-secondary [&>*]:w-10 [&>*]:h-10'>
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
		</>
	)
}
