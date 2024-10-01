'use client'
import { BannerSliderProps, BannersSlider } from '@/components/BannersSlider/BannersSlider'
import { Error } from '@/components/Error/Error'
import { Loading } from '@/components/Loading'
import { SectionAbout, SectionAboutProps } from '@/components/SectionAbout'
import { SectionBenefits, SectionBenefitsProps } from '@/components/SectionBenefits'
import { SectionContact, SectionContactProps } from '@/components/SectionContact'
import { SectionServices, SectionServicesProps } from '@/components/SectionServices'
import { HOMEPAGE_QUERY } from '@/graphql/queries/Home'
import { useQuery } from '@apollo/client'

interface HomeProps {
	banners: BannerSliderProps
	about: SectionAboutProps
	services: SectionServicesProps
	benefits: SectionBenefitsProps
	contact: SectionContactProps
}

export default function Home() {
	const { data, loading, error } = useQuery(HOMEPAGE_QUERY)

	if (loading) {
		return <Loading className='z-0' />
	}

	if (error) {
		console.log(`src/app/page.tsx - Error: ${error.message}`)
		return <Error title='Início' />
	}

	const { banners, about, services, benefits, contact }: HomeProps = data.homepage.data.attributes

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

