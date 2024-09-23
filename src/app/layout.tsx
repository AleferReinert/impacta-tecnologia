import { Error } from '@/components/Error'
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

async function getEnterpriseData(): Promise<EnterpriseProps | null> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/enterprise?populate=*`, { next: { revalidate: 0 } })
	const data = await res.json()
	if (!res.ok) {
		console.log(`src/app/layout.tsx: fetch error.`)
		return null
	}
	return data.data.attributes
}

export async function generateMetadata(): Promise<Metadata | null> {
	const enterprise = await getEnterpriseData()
	if (!enterprise) {
		return null
	}

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
	const favicon = enterprise?.favicon.data.attributes

	return (
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

				{enterprise ? (
					<>
						<Header enterprise={enterprise} />
						<main className='pt-16'>{children}</main>
						<Footer enterprise={enterprise} />
					</>
				) : (
					<Error description='Parece que algo deu errado, tente atualizar a página ou volte mais tarde.' />
				)}
			</body>
		</html>
	)
}

