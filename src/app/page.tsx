import { BannerSliderProps } from '@/components/BannersSlider'
import { Layout } from '@/components/Layout'
import { Loading } from '@/components/Loading'
import { SectionAbout, SectionAboutProps } from '@/components/SectionAbout'
import { SectionBenefits, SectionBenefitsProps } from '@/components/SectionBenefits'
import { SectionContact, SectionContactProps } from '@/components/SectionContact'
import { SectionServices, SectionServicesProps } from '@/components/SectionServices'
import dynamic from 'next/dynamic'

const BannersSlider = dynamic(() => import('../components/BannersSlider').then(mod => mod.BannersSlider), {
	loading: () => <Loading type='component' show className='aspect-[5/4] sm:aspect-[3/2] md:aspect-[3/1]' />,
	ssr: false
})

interface HomeProps {
	banners: BannerSliderProps
	about: SectionAboutProps
	services: SectionServicesProps
	benefits: SectionBenefitsProps
	contact: SectionContactProps
}

export default async function Home() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/homepage?populate[banners][populate][banners][populate]=img&populate[about][populate][0]=descriptions&populate[services][populate][0]=services&populate[benefits][populate][0]=benefits&populate[contact][populate][0]=contact`
	const res = await fetch(url, { next: { revalidate: 3600 }, cache: 'no-cache' }).then(res => res.json())
	const { banners, about, services, benefits, contact }: HomeProps = res.data.attributes

	return (
		<Layout>
			<BannersSlider
				banners={banners.banners}
				effect={banners.effect}
				scrollSpeed={banners.scrollSpeed}
				transitionSpeed={banners.transitionSpeed}
			/>
			<SectionAbout title={about.title} descriptions={about.descriptions} />
			<SectionServices title={services.title} services={services.services} />
			<SectionBenefits title={benefits.title} benefits={benefits.benefits} />
			<SectionContact title={contact.title} description={contact.description} />
		</Layout>
	)
}

