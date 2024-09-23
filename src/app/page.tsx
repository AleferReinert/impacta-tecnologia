import { BannerSliderProps } from '@/components/BannersSlider'
import { Error } from '@/components/Error'
import { Loading } from '@/components/Loading'
import { SectionAbout, SectionAboutProps } from '@/components/SectionAbout'
import { SectionBenefits, SectionBenefitsProps } from '@/components/SectionBenefits'
import { SectionContact, SectionContactProps } from '@/components/SectionContact'
import { SectionServices, SectionServicesProps } from '@/components/SectionServices'
import dynamic from 'next/dynamic'

const BannersSlider = dynamic(() => import('@/components/BannersSlider').then(mod => mod.BannersSlider), {
	ssr: false,
	loading: () => <Loading type='component' show className='aspect-[5/4] sm:aspect-[3/2] md:aspect-[3/1]' />
})

interface HomeProps {
	banners: BannerSliderProps
	about: SectionAboutProps
	services: SectionServicesProps
	benefits: SectionBenefitsProps
	contact: SectionContactProps
}

export default async function Home() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/homepage?populate[banners][populate][banners][populate]=img&populate[banners][populate]=sliderConfig&populate[about][populate][0]=descriptions&populate[about][populate]=sliderConfig&populate[services][populate][0]=services&populate[benefits][populate][0]=benefits&populate[benefits][populate]=sliderConfig&populate[contact][populate][0]=contact`
	const res = await fetch(url, { next: { revalidate: 0 } })
	const data = await res.json()

	if (!res.ok) {
		console.log(`src/app/page.tsx: fetch error.`)
		return <Error />
	}

	const { banners, about, services, benefits, contact }: HomeProps = data.data.attributes

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

