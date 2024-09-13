import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { SocialLinksProps } from './SocialLinks'

export interface EnterpriseProps extends SocialLinksProps {
	name: string
	email: string
	logo: {
		data: {
			attributes: {
				formats: {
					thumbnail: {
						url: string
					}
				}
			}
		}
	}
}

interface LayoutProps {
	children: ReactNode
}

export async function Layout({ children }: LayoutProps) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/enterprise?populate=*`
	const res = await fetch(url, { next: { revalidate: 3600 }, headers: { 'Cache-Control': 'no-cache' } }).then(
		res => res.json()
	)
	const enterprise: EnterpriseProps = res.data.attributes

	return (
		<>
			<Header enterprise={enterprise} />
			<main className='pt-16'>{children}</main>
			<Footer enterprise={enterprise} />
		</>
	)
}
