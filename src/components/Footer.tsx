import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Container } from './Container'

export function Footer() {
	return (
		<footer className='py-6 text-center text-sm border-t border-gray-300 sm:py-5'>
			<Container>
				<div className='sm:flex sm:flex-row-reverse sm:justify-between sm:items-center'>
					<nav className='flex justify-center gap-4 mb-4 [&_svg]:w-8 [&_svg]:h-8 sm:mb-0 sm:[&_svg]:w-6 sm:[&_svg]:h-6'>
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
					<p>Impacta Tecnologia & Soluções em TI</p>
				</div>
			</Container>
		</footer>
	)
}
