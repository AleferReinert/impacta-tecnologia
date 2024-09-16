'use client'
import { BannerSliderProps, BannersSlider } from '@/components/BannersSlider'
import { Loading } from '@/components/Loading'
import { SectionAbout, SectionAboutProps } from '@/components/SectionAbout'
import { SectionBenefits, SectionBenefitsProps } from '@/components/SectionBenefits'
import { SectionContact, SectionContactProps } from '@/components/SectionContact'
import { SectionServices, SectionServicesProps } from '@/components/SectionServices'
import { useEffect, useState } from 'react'

interface HomeProps {
	banners: BannerSliderProps
	about: SectionAboutProps
	services: SectionServicesProps
	benefits: SectionBenefitsProps
	contact: SectionContactProps
}

export default function Home() {
	const [data, setData] = useState<HomeProps>()

	useEffect(() => {
		const url = `${process.env.NEXT_PUBLIC_API_URL}/api/homepage?populate[banners][populate][banners][populate]=img&populate[banners][populate]=sliderConfig&populate[about][populate][0]=descriptions&populate[about][populate]=sliderConfig&populate[services][populate][0]=services&populate[benefits][populate][0]=benefits&populate[benefits][populate]=sliderConfig&populate[contact][populate][0]=contact`
		fetch(url, { next: { revalidate: 0 } })
			.then(res => res.json())
			.then(data => {
				setData(data.data.attributes)
			})
	}, [])

	if (!data) {
		return <Loading type='component' show className='aspect-[5/4] sm:aspect-[3/2] md:aspect-[3/1]' />
	} else {
		const { banners, about, services, benefits, contact }: HomeProps = data

		return (
			<>
				<BannersSlider banners={banners.banners} sliderConfig={banners.sliderConfig} />
				<SectionAbout
					title={about.title}
					descriptions={about.descriptions}
					sliderConfig={about.sliderConfig}
				/>
				<SectionServices title={services.title} services={services.services} />
				<SectionBenefits
					title={benefits.title}
					benefits={benefits.benefits}
					sliderConfig={benefits.sliderConfig}
				/>
				<SectionContact title={contact.title} description={contact.description} />
			</>
		)
	}
}

