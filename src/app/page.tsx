import { BannerSliderProps, BannersSlider } from '@/components/BannersSlider'
import { SectionAbout, SectionAboutProps } from '@/components/SectionAbout'
import { SectionBenefits, SectionBenefitsProps } from '@/components/SectionBenefits'
import { SectionContact, SectionContactProps } from '@/components/SectionContact'
import { SectionServices, SectionServicesProps } from '@/components/SectionServices'

interface HomeProps {
	banners: BannerSliderProps
	about: SectionAboutProps
	services: SectionServicesProps
	benefits: SectionBenefitsProps
	contact: SectionContactProps
}

export default async function Home() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/homepage?populate[banners][populate][banners][populate]=img&populate[banners][populate]=sliderConfig&populate[about][populate][0]=descriptions&populate[about][populate]=sliderConfig&populate[services][populate][0]=services&populate[benefits][populate][0]=benefits&populate[benefits][populate]=sliderConfig&populate[contact][populate][0]=contact`
	const res = await fetch(url, { next: { revalidate: 0 } }).then(res => res.json())
	const { banners, about, services, benefits, contact }: HomeProps = res.data.attributes

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

