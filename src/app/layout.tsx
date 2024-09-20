import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SocialLinksProps } from '@/components/SocialLinks'
import { Metadata } from 'next'
import { Audiowide, Poppins } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-poppins'
})

const audiowide = Audiowide({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-audiowide'
})

export interface StrapiImageUpload {
	data: {
		attributes: {
			url: string
			mime: string
			width: number
			height: number
			formats: {
				thumbnail: {
					url: string
				}
				small: {
					url: string
				}
				medium: {
					url: string
				}
				large: {
					url: string
				}
			}
		}
	}
}

export interface EnterpriseProps extends SocialLinksProps {
	name: string
	description: string
	email: string
	phone?: string
	cnpj?: string
	businessHours?: {
		title: string
		content: string
	}
	logo: StrapiImageUpload
	favicon: StrapiImageUpload
}

async function getEnterpriseData(): Promise<EnterpriseProps> {
	const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/enterprise?populate=*`, { next: { revalidate: 0 } }).then(
		res => res.json()
	)
	return data.data.attributes
}

export async function generateMetadata(): Promise<Metadata> {
	const enterprise = await getEnterpriseData()

	return {
		title: {
			template: `%s - ${enterprise.name}`,
			default: enterprise.name
		},
		description: enterprise.description
	}
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const enterprise = await getEnterpriseData()
	const favicon = enterprise.favicon.data.attributes

	return (
		<html lang='pt-br'>
			<head>
				<link rel='icon' href={favicon.url} type={favicon.mime} sizes={`${favicon.width}x${favicon.height}`} />
			</head>
			<body className={`${audiowide.variable} ${poppins.variable} text-slate-600`}>
				<Toaster
					richColors
					toastOptions={{
						classNames: {
							toast: 'text-base rounded-none'
						}
					}}
				/>
				<Header enterprise={enterprise} />
				<main className='pt-16 min-h-[80vh]'>{children}</main>
				<Footer enterprise={enterprise} />
			</body>
		</html>
	)
}

