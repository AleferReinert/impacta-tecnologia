import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
interface LayoutProps {
	children: ReactNode
}
export function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			<main className='pt-[60px] pb-16'>{children}</main>
			<Footer />
		</>
	)
}
