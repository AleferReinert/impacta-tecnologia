import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { SocialLinksProps } from './SocialLinks'

export interface EnterpriseProps extends SocialLinksProps {
	name: string
}

interface LayoutProps {
	children: ReactNode
	enterprise: EnterpriseProps
}

export async function Layout({ children, enterprise }: LayoutProps) {
	return (
		<>
			<Header enterprise={enterprise} />
			<main className='pt-16'>{children}</main>
			<Footer enterprise={enterprise} />
		</>
	)
}
