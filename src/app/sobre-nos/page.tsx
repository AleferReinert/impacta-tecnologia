import { BoxContent, BoxContentProps } from '@/components/BoxContent'
import { Container } from '@/components/Container'
import { DynamicIcon } from '@/components/DynamicIcon'
import { Layout } from '@/components/Layout'
import { PageTitle } from '@/components/PageTitle'
import { Subtitle } from '@/components/Subtitle'

interface AboutProps {
	description: string
	values: {
		title: string
		values: {
			title: string
			description: string
			icon: string
		}[]
	}
	mission: BoxContentProps
	vision: BoxContentProps
}

export default async function About() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/aboutpage?populate=*`
	const res = await fetch(url, { next: { revalidate: 3600 } }).then(res => res.json())
	const about: AboutProps = res.data.attributes

	const urlValues = `${process.env.NEXT_PUBLIC_API_URL}/api/aboutpage?populate[values][populate][0]=values`
	const resValues = await fetch(urlValues, { next: { revalidate: 3600 } }).then(res => res.json())
	const { values }: Pick<AboutProps, 'values'> = resValues.data.attributes

	return (
		<Layout>
			<PageTitle>Sobre nós</PageTitle>
			<Container>
				<p
					dangerouslySetInnerHTML={{ __html: about.description }}
					className='text-center py-10 leading-loose [&_strong]:text-secondary [&_strong]:font-semibold'
				></p>
			</Container>

			<BoxContent
				variant={about.mission.variant}
				icon={about.mission.icon}
				title={about.mission.title}
				description={about.mission.description}
			/>

			<BoxContent
				variant={about.vision.variant}
				icon={about.vision.icon}
				title={about.vision.title}
				description={about.vision.description}
			/>

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
									<div className='hidden sm:block [&_svg]:fill-secondary [&_svg]:text-secondary [&_svg]:w-10 [&_svg]:h-10'>
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
		</Layout>
	)
}
