'use client'
import { EnterpriseProps } from '@/app/layout'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdClose, MdOutlineMenu } from 'react-icons/md'
import { Container } from '../Container/Container'
import { SocialLinks } from '../SocialLinks/SocialLinks'

interface HeaderProps {
	enterprise: Omit<EnterpriseProps, 'description'>
}

export const menuLinks = [
	{ title: 'Sobre nós', url: '/sobre-nos' },
	{ title: 'Serviços', url: '/servicos' },
	{ title: 'Contato', url: '/contato' }
]

export function Header({ enterprise }: HeaderProps) {
	const [fixedHeader, setFixedHeader] = useState(true)
	const [menu, setMenu] = useState(false)
	const enterpriseName = enterprise.name ?? 'Impacta Tecnologia & Soluções em TI'
	const logoImg = enterprise.logo.data.attributes.url
	const [headerPositionY, setHeaderPositionY] = useState(0)

	useEffect(() => {
		setHeaderPositionY(document.getElementsByTagName('header')[0].offsetHeight)

		let prev = window.scrollY
		const fixedHeaderOnScrollUp = () => {
			let current = window.scrollY
			prev > current ? setFixedHeader(true) : setFixedHeader(false)
			prev = current
		}
		window.addEventListener('scroll', fixedHeaderOnScrollUp)
		return () => window.removeEventListener('scroll', fixedHeaderOnScrollUp)
	}, [headerPositionY])

	return (
		<header
			data-testid='HeaderComponent'
			className={`fixed right-0 left-0 transition z-20 bg-white ${
				fixedHeader ? 'translate-y shadow' : !menu ? '-translate-y-[100%]' : ''
			}`}
		>
			<Container>
				<div className='h-16 flex justify-between items-center'>
					<Link href='/' title={enterpriseName}>
						<Image src={logoImg} alt={enterpriseName} width={144} height={32} priority />
					</Link>

					<nav className={`hidden gap-8 flex-row text-sm relative sm:flex`}>
						{menuLinks.map((item, index) => (
							<Link key={index} href={item.url} className='text-secondary hover:text-primary [&>span]:hover:w-full'>
								{item.title}
								<span className='block w-0 mx-auto h-[1px] bg-primary translate-y-1 transition-all'></span>
							</Link>
						))}
					</nav>

					<div className='sm:hidden inline-flex'>
						<button title='Abrir menu' onClick={() => setMenu(true)} className='text-zinc-900'>
							<MdOutlineMenu size={32} />
						</button>

						<div
							className={`
								${menu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} 
								text-center transition fixed inset-0 z-40 bg-white flex items-center justify-center`}
						>
							<nav className='flex flex-col text-2xl gap-10'>
								<button
									title='Fechar menu'
									className='fixed right-4 top-4 text-zinc-900 sm:hidden'
									onClick={() => setMenu(false)}
								>
									<MdClose size={32} />
								</button>

								{menuLinks.map((item, index) => (
									<Link key={index} href={item.url} onClick={() => setMenu(false)} className='text-secondary'>
										{item.title}
									</Link>
								))}

								{enterprise.socialLinks.length > 0 && <SocialLinks socialLinks={enterprise.socialLinks} iconColor='dark' />}
							</nav>
						</div>
					</div>
				</div>
			</Container>
		</header>
	)
}
