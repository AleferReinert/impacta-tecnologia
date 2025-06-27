import { Error } from '@/components/Error/Error'
import { Layout } from '@/components/Layout/Layout'
import { Provider } from '@/components/Provider'
import { SocialLinksProps } from '@/components/SocialLinks/SocialLinks'
import { ENTERPRISE_QUERY } from '@/graphql/queries/Enterprise'
import { client } from '@/utils/client'
import { Metadata, Viewport } from 'next'
import { Audiowide, Poppins } from 'next/font/google'
import 'slick-carousel/slick/slick.css'
import socialSharingImage from '../../public/social-sharing.png'
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

export interface EnterpriseProps extends SocialLinksProps {
	name: string
	description: string
	email: string
	phone: string
	cnpj: string
	businessHours: {
		title: string
		content: string
	}
	logo: { data: { attributes: { url: string } } }
	favicon: {
		data: {
			attributes: {
				url: string
				width: number
				height: number
				mime: string
			}
		}
	}
}

async function fetchEnterpriseData() {
	const { data } = await client.query({ query: ENTERPRISE_QUERY })
	return data
}

export async function generateMetadata(): Promise<Metadata | null> {
	const data = await fetchEnterpriseData()
	const enterprise: EnterpriseProps = data.enterprise.data.attributes

	if (!data) return null

	return {
		title: {
			template: `%s - ${enterprise.name}`,
			default: enterprise.name
		},
		description: enterprise.description,
		authors: [{ name: 'Alefer Reinert', url: 'https://aleferreinert.vercel.app' }],
		alternates: { canonical: process.env.NEXT_PUBLIC_SITE_URL },
		openGraph: {
			title: enterprise.name,
			description: enterprise.description,
			type: 'website',
			url: process.env.NEXT_PUBLIC_SITE_URL,
			images: [socialSharingImage.src]
		},
		twitter: {
			title: enterprise.name,
			description: enterprise.description,
			card: 'summary_large_image',
			images: [socialSharingImage.src]
		}
	}
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#041634'
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const data = await fetchEnterpriseData()
	const enterprise: EnterpriseProps = data.enterprise.data.attributes
	const favicon = enterprise.favicon.data.attributes

	if (!data) {
		return <Error description='Parece que algo deu errado, tente atualizar a página ou volte mais tarde.' />
	}

	return (
		<Provider>
			<html lang='pt-br'>
				<head>
					{favicon && (
						<link rel='icon' href={favicon.url} type={favicon.mime} sizes={`${favicon.width}x${favicon.height}`} />
					)}
				</head>
				<body
					className={`${audiowide.variable} ${poppins.variable} text-slate-600 min-h-dvh flex flex-col justify-between`}
				>
					<Layout enterprise={enterprise}>{children}</Layout>
				</body>
			</html>
		</Provider>
	)
}

