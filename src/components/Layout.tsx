import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { SocialLinksProps } from './SocialLinks'

export interface EnterpriseProps extends SocialLinksProps {
	name: string
}

interface LayoutProps {
	children: ReactNode
}

export async function Layout({ children }: LayoutProps) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/homepage?populate[enterprise][populate][0]=socialLinks`
	const res = await fetch(url, { next: { revalidate: 3600 } }).then(res => res.json())
	const enterprise: EnterpriseProps = res.data.attributes.enterprise

	return (
		<>
			<Header enterprise={enterprise} />
			<main className='pt-16'>{children}</main>
			<Footer enterprise={enterprise} />
		</>
	)
}
