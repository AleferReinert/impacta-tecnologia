'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MdClose, MdOutlineMenu } from 'react-icons/md'
import { Container } from './Container'

const navigation = [
	{ title: 'Home', url: '/' },
	{ title: 'Sobre nós', url: '/sobre-nos' },
	{ title: 'Serviços', url: '/servicos' }
]

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
				fixedHeader ? 'translate-y shadow' : 'translate-y-[-100%]'
			}`}
		>
			<Container>
				<div className='h-14 flex justify-between items-center text-white'>
					<a href='/' className='font-bold text-xl text-zinc-900'>
						<Image src='/impacta-logo-dark.webp' alt='Impacta Tecnologia' width={126} height={36} />
					</a>

					<button title='Menu' className='sm:hidden' onClick={() => setMenu(true)}>
						<MdOutlineMenu size={28} />
					</button>
					<nav
						className={`
							${menu ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
							flex flex-col transition items-center justify-center fixed inset-0 z-40 bg-blue-900 text-2xl gap-4
							sm:opacity-100 sm:relative sm:bg-transparent sm:flex-row sm:text-sm sm:gap-8 sm:pointer-events-auto sm:text-zinc-900
						`}
					>
						<button
							title='Fechar menu'
							className='fixed right-4 top-4 sm:hidden'
							onClick={() => setMenu(false)}
						>
							<MdClose size={28} />
						</button>
						{navigation.map((item, index) => (
							<a key={index} href={item.url} className='[&>span]:hover:w-full'>
								{item.title}
								<span className='block w-0 mx-auto h-[1px] bg-slate-900 translate-y-1 transition-all'></span>
							</a>
						))}
					</nav>
				</div>
			</Container>
		</header>
	)
}
