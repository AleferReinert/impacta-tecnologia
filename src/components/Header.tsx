'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Container } from './Container'
import { EnterpriseProps } from './Layout'
import { MenuLinks } from './MenuLinks'
import { MenuMobile } from './MenuMobile'

interface HeaderProps {
	enterprise: EnterpriseProps
}

export function Header({ enterprise }: HeaderProps) {
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
					<a href='/' title={enterprise.name}>
						<Image src='/impacta-logo.webp' alt={enterprise.name} width={144} height={32} priority />
					</a>

					<MenuMobile menu={menu} setMenu={setMenu} socialLinks={enterprise.socialLinks} />
					<nav className='hidden gap-8 text-sm sm:flex'>
						<MenuLinks />
					</nav>
				</div>
			</Container>
		</header>
	)
}
