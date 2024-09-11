import type { Metadata } from 'next'
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

export const metadata: Metadata = {
	title: ' Impacta Tecnologia & Soluções em TI',
	description:
		'Descubra como podemos ajudar você a alcançar seus objetivos tecnológicos com eficiência e inovação.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pt-br'>
			<body className={`${audiowide.variable} ${poppins.variable} text-slate-600`}>
				<Toaster
					richColors
					toastOptions={{
						classNames: {
							toast: 'text-base rounded-none'
						}
					}}
				/>
				{children}
			</body>
		</html>
	)
}

