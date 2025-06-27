import { Error } from '@/components/Error/Error'
import { Layout } from '@/components/Layout/Layout'
import { Provider } from '@/components/Provider'
import { SocialLinksProps } from '@/components/SocialLinks/SocialLinks'
import { ENTERPRISE_QUERY } from '@/graphql/queries/Enterprise'
import { client } from '@/utils/client'
import { Metadata } from 'next'
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
		description: enterprise.description
	}
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
					<meta name='theme-color' content='#041634' />

					{/* Visualização de compartilhamento em redes sociais */}
					<meta property='og:title' content={enterprise.name} />
					<meta name='author' content='Alefer Reinert' />
					<meta property='og:description' content={enterprise.description} />
					<meta property='og:type' content='website' />
					<meta property='og:url' content='https://impacta-tecnologia.vercel.app' />
					<meta property='og:image' content={socialSharingImage.src} />
					<meta name='og:image:alt' content='Logotipo da empresa' />
					<meta property='og:image:width' content='1200' />
					<meta property='og:image:height' content='630' />
					<meta name='twitter:card' content='summary_large_image' />
					<link rel='canonical' href='https://impacta-tecnologia.vercel.app' />
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

