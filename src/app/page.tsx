import { BannerProps, BannersSlider } from '@/components/BannersSlider'
import { Layout } from '@/components/Layout'
import { SectionAbout, SectionAboutProps } from '@/components/SectionAbout'
import { SectionBenefits, SectionBenefitsProps } from '@/components/SectionBenefits'
import { SectionContact, SectionContactProps } from '@/components/SectionContact'
import { SectionServices, SectionServicesProps } from '@/components/SectionServices'

interface HomeProps {
	banners: BannerProps[]
	about: SectionAboutProps
	services: SectionServicesProps
	benefits: SectionBenefitsProps
	contact: SectionContactProps
}

export default async function Home() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/homepage?populate[banners][populate][0]=img&populate[about][populate][0]=descriptions&populate[services][populate][0]=services&populate[benefits][populate][0]=benefits&populate[contact][populate][0]=contact`
	const res = await fetch(url, { next: { revalidate: 3600 } }).then(res => res.json())
	const { banners, about, services, benefits, contact }: HomeProps = res.data.attributes

	return (
		<Layout>
			<BannersSlider banners={banners} />
			<SectionAbout title={about.title} descriptions={about.descriptions} />
			<SectionServices title={services.title} services={services.services} />
			<SectionBenefits title={benefits.title} benefits={benefits.benefits} />
			<SectionContact title={contact.title} description={contact.description} />
		</Layout>
	)
}

