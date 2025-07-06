import { BannerSliderProps, BannersSlider } from '@/components/BannersSlider/BannersSlider'
import { Error } from '@/components/Error/Error'
import { SectionAbout, SectionAboutProps } from '@/components/SectionAbout/SectionAbout'
import type { SectionBenefitsProps } from '@/components/SectionBenefits/SectionBenefits'
import { SectionBenefitsSkeleton } from '@/components/SectionBenefits/SectionBenefitsSkeleton'
import { SectionContact, SectionContactProps } from '@/components/SectionContact/SectionContact'
import { SectionServices, SectionServicesProps } from '@/components/SectionServices/SectionServices'
import { HOMEPAGE_QUERY } from '@/graphql/queries/Home'
import { client } from '@/utils/client'
import dynamic from 'next/dynamic'

const SectionBenefits = dynamic(
	() => import('@/components/SectionBenefits/SectionBenefits').then(mod => mod.SectionBenefits),
	{
		ssr: false,
		loading: () => <SectionBenefitsSkeleton />
	}
)

export interface HomeProps {
	banners: BannerSliderProps
	about: SectionAboutProps
	services: SectionServicesProps
	benefits: SectionBenefitsProps
	contact: SectionContactProps
}

export const revalidate = 0

export default async function Home() {
	const { data, error } = await client.query({
		query: HOMEPAGE_QUERY,
		fetchPolicy: 'no-cache'
	})
	const { banners, about, services, benefits, contact }: HomeProps = data.homepage.data.attributes

	if (error) {
		console.error(`src/app/page.tsx - Error: ${error.message}`)
		return <Error title='Início' />
	}

	return (
		<>
			<BannersSlider banners={banners.banners} sliderConfig={banners.sliderConfig} />
			<SectionAbout title={about.title} descriptions={about.descriptions} sliderConfig={about.sliderConfig} />
			<SectionServices title={services.title} services={services.services} />
			<SectionBenefits title={benefits.title} benefits={benefits.benefits} sliderConfig={benefits.sliderConfig} />
			<SectionContact title={contact.title} description={contact.description} />
		</>
	)
}

