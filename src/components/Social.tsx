import { IconType } from 'react-icons'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const iconComponents: Record<string, IconType> = {
	Facebook: FaFacebook,
	Instagram: FaInstagram,
	Whatsapp: FaWhatsapp
}

const socialLinks = [
	{ title: 'Facebook', url: 'http://facebook.com', icon: 'Facebook' },
	{ title: 'Instagram', url: 'http://instagram.com', icon: 'Instagram' },
	{ title: 'Whatsapp', url: 'http://whatsapp.com', icon: 'Whatsapp' }
]

export function Social() {
	return (
		<nav className='flex justify-center gap-4 mb-4 [&_svg]:w-8 [&_svg]:h-8 sm:mb-0 sm:[&_svg]:w-6 sm:[&_svg]:h-6'>
			{socialLinks.map((link, index) => {
				const IconComponent = iconComponents[link.icon]
				return (
					<a key={index} href={link.url} target='_blank' title={link.title}>
						<IconComponent />
					</a>
				)
			})}
		</nav>
	)
}
