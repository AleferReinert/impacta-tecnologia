import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SocialLinksProps } from '@/components/SocialLinks'
import { Audiowide, Poppins } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const poppins = Poppins({
	weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--font-poppins'
})

const audiowide = Audiowide({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-audiowide'
})

interface StrapiImageUpload {
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

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/enterprise?populate=*`
	const res = await fetch(url, { next: { revalidate: 0 } }).then(res => res.json())
	const enterprise: EnterpriseProps = res.data.attributes
	const favicon = enterprise.favicon.data.attributes

	return (
		<html lang='pt-br'>
			<head>
				<title>{enterprise.name}</title>
				<meta name='description' content={enterprise.description} />
				<link
					rel='icon'
					href={process.env.NEXT_PUBLIC_API_URL + favicon.url}
					type={favicon.mime}
					sizes={`${favicon.width}x${favicon.height}`}
				/>
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
				<>
					<Header enterprise={enterprise} />
					<main className='pt-16 min-h-[80vh]'>{children}</main>
					<Footer enterprise={enterprise} />
				</>
			</body>
		</html>
	)
}

