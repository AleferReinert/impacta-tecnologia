import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Container } from './Container'

export function Footer() {
	return (
		<footer className='py-4 text-sm border-t border-gray-300 [&_svg]:w-6 [&_svg]:h-6'>
			<Container>
				<div className='flex justify-between items-center'>
					Impacta Tecnologia & Soluções em TI
					<nav className='flex gap-2'>
						<a href='http://facebook.com' target='_blank' title='Facebook'>
							<FaFacebook />
						</a>
						<a href='http://facebook.com' target='_blank' title='Instagram'>
							<FaInstagram />
						</a>
						<a href='http://facebook.com' target='_blank' title='Whatsapp'>
							<FaWhatsapp />
						</a>
					</nav>
				</div>
			</Container>
		</footer>
	)
}
