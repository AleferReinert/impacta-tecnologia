import { Container } from './Container'
import { Social } from './Social'

export function Footer() {
	return (
		<footer className='py-6 text-center text-sm border-t border-slate-300 sm:py-5'>
			<Container>
				<div className='sm:flex sm:flex-row-reverse sm:justify-between sm:items-center'>
					<Social />
					<p className='text-secondary'>Impacta Tecnologia & Soluções em TI</p>
				</div>
			</Container>
		</footer>
	)
}
