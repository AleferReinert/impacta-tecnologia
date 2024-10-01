import { Error } from '@/components/Error/Error'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Provider } from '@/components/Provider'
import { SocialLinksProps } from '@/components/SocialLinks'
import { ENTERPRISE_QUERY } from '@/graphql/queries/Enterprise'
import { client } from '@/utils/client'
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

async function fetchEnterpriseData() {
	const { data } = await client.query({
		query: ENTERPRISE_QUERY
	})
	return data
}

export async function generateMetadata(): Promise<Metadata | null> {
	const data = await fetchEnterpriseData()

	if (!data) return null
	const enterprise = data.enterprise.data.attributes

	return {
		title: {
			template: `%s - ${enterprise.name}`,
			default: enterprise.name
		},
		description: enterprise.description
	}
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const data = await fetchEnterpriseData()

	if (!data) {
		return <Error description='Parece que algo deu errado, tente atualizar a página ou volte mais tarde.' />
	}

	const enterprise = data.enterprise.data.attributes
	const favicon = enterprise.favicon.data.attributes

	return (
		<Provider>
			<html lang='pt-br'>
				<head>
					{favicon && <link rel='icon' href={favicon.url} type={favicon.mime} sizes={`${favicon.width}x${favicon.height}`} />}
				</head>
				<body className={`${audiowide.variable} ${poppins.variable} text-slate-600 min-h-dvh flex flex-col justify-between`}>
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
				</body>
			</html>
		</Provider>
	)
}

