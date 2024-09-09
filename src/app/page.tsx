import { BannerProps, BannersSlider } from '@/components/BannersSlider'
import { Layout } from '@/components/Layout'
import { SectionAbout, SectionAboutProps } from '@/components/SectionAbout'
import { SectionBenefits, SectionBenefitsProps } from '@/components/SectionBenefits'
import { SectionContact } from '@/components/SectionContact'
import { SectionServices, SectionServicesProps } from '@/components/SectionServices'

export default async function Home() {
	const urlBanners = `${process.env.NEXT_PUBLIC_API_URL}/api/homepage?populate[0]=banners`
	const resBanners = await fetch(urlBanners, { next: { revalidate: 3600 } }).then(res => res.json())
	const banners: BannerProps[] = resBanners.data.attributes.banners

	const urlAbout = `${process.env.NEXT_PUBLIC_API_URL}/api/homepage?populate[about][populate][0]=descriptions`
	const resAbout = await fetch(urlAbout, { next: { revalidate: 3600 } }).then(res => res.json())
	const about: SectionAboutProps = resAbout.data.attributes.about

	const urlServices = `${process.env.NEXT_PUBLIC_API_URL}/api/homepage?populate[services][populate][0]=services`
	const resServices = await fetch(urlServices, { next: { revalidate: 3600 } }).then(res => res.json())
	const services: SectionServicesProps = resServices.data.attributes.services

	const urlBenefits = `${process.env.NEXT_PUBLIC_API_URL}/api/homepage?populate[benefits][populate][0]=benefits`
	const resBenefits = await fetch(urlBenefits, { next: { revalidate: 3600 } }).then(res => res.json())
	const benefits: SectionBenefitsProps = resBenefits.data.attributes.benefits

	return (
		<Layout>
			<BannersSlider banners={banners} />
			<SectionAbout title={about.title} descriptions={about.descriptions} />
			<SectionServices title={services.title} services={services.services} />
			<SectionBenefits title={benefits.title} benefits={benefits.benefits} />
			<SectionContact />
		</Layout>
	)
}

