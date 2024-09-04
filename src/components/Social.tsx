import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const socialLinks = [
	{ title: 'Facebook', url: 'http://facebook.com', icon: FaFacebook },
	{ title: 'Instagram', url: 'http://instagram.com', icon: FaInstagram },
	{ title: 'Whatsapp', url: 'http://whatsapp.com', icon: FaWhatsapp }
]

export function Social() {
	return (
		<nav className='flex justify-center gap-4 mb-4 sm:mb-0'>
			{socialLinks.map((link, index) => {
				return (
					<a key={index} title={link.title} href={link.url} target='_blank'>
						<link.icon className='w-8 h-8 sm:w-6 sm:h-6 fill-secondary transition hover:fill-primary' />
					</a>
				)
			})}
		</nav>
	)
}
