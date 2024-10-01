'use client'
import { EnterpriseProps } from '@/app/layout'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Container } from './Container/Container'
import { MenuLinks } from './MenuLinks'
import { MenuMobile } from './MenuMobile'

interface HeaderProps {
	enterprise: EnterpriseProps
}

export function Header({ enterprise }: HeaderProps) {
	const [fixedHeader, setFixedHeader] = useState('fixed')
	const [menu, setMenu] = useState(false)
	const enterpriseName = enterprise.name ?? 'Impacta Tecnologia & Soluções em TI'
	const logoImg = enterprise.logo.data.attributes.url

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
					<Link href='/' title={enterpriseName}>
						<Image src={logoImg} alt={enterpriseName} width={144} height={32} priority />
					</Link>

					<MenuMobile menu={menu} setMenu={setMenu} socialLinks={enterprise.socialLinks} />
					<nav className='hidden gap-8 text-sm sm:flex'>
						<MenuLinks />
					</nav>
				</div>
			</Container>
		</header>
	)
}
