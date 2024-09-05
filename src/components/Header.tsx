'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Container } from './Container'
import { MenuLinks } from './MenuLinks'
import { MenuMobile } from './MenuMobile'

export function Header() {
	const [fixedHeader, setFixedHeader] = useState('fixed')
	const [menu, setMenu] = useState(false)

	useEffect(() => {
		let prev = window.scrollY

		const fixedHeaderOnScrollUp = () => {
			let current = window.scrollY
			prev > current ? setFixedHeader('fixed') : setFixedHeader('')
			prev = current
		}

		window.addEventListener('scroll', fixedHeaderOnScrollUp)
		return () => window.removeEventListener('scroll', fixedHeaderOnScrollUp)
	})

	return (
		<header
			className={`fixed right-0 left-0 transition z-20 bg-white ${
				fixedHeader ? 'translate-y shadow' : !menu && 'translate-y-[-100%]'
			}`}
		>
			<Container>
				<div className='h-16 flex justify-between items-center'>
					<a href='/'>
						<Image src='/impacta-logo2.webp' alt='Impacta Tecnologia' width={144} height={32} />
					</a>

					<MenuMobile menu={menu} setMenu={setMenu} />
					<nav className='hidden gap-8 text-sm sm:flex'>
						<MenuLinks />
					</nav>
				</div>
			</Container>
		</header>
	)
}
