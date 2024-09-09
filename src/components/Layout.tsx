import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { SocialLinksProps } from './SocialLinks'

interface LayoutProps {
	children: ReactNode
}

interface EnterpriseProps extends SocialLinksProps {
	name: string
}

export async function Layout({ children }: LayoutProps) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/homepage?populate[enterprise][populate][0]=socialLinks`
	const { data } = await fetch(url, { next: { revalidate: 3600 } }).then(res => res.json())
	const enterprise: EnterpriseProps = data.attributes.enterprise

	return (
		<>
			<Header enterpriseName={enterprise.name} socialLinks={enterprise.socialLinks} />
			<main className='pt-16'>{children}</main>
			<Footer enterpriseName={enterprise.name} socialLinks={enterprise.socialLinks} />
		</>
	)
}
