import { EnterpriseProps } from '@/app/layout'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

interface LayoutProps {
	enterprise: EnterpriseProps
	children: ReactNode
}

export function Layout({ enterprise, children }: LayoutProps) {
	return (
		<>
			<Toaster
				richColors
				toastOptions={{
					classNames: {
						toast: 'text-base rounded-none'
					}
				}}
			/>
			<Header enterprise={enterprise} />
			<main className='pt-16'>{children}</main>
			<Footer enterprise={enterprise} />
		</>
	)
}
