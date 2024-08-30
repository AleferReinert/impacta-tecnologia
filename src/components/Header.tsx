'use client'
import { useState } from 'react'
import { MdClose, MdOutlineMenu } from 'react-icons/md'
import { Container } from './Container'
export function Header() {
	const [menu, setMenu] = useState(false)

	return (
		<header className='py-4 bg-primary'>
			<Container>
				<div className='flex justify-between text-white'>
					<a href='/' className='font-bold text-xl'>
						Impacta
					</a>

					<button title='Menu' className='sm:hidden' onClick={() => setMenu(true)}>
						<MdOutlineMenu size={28} />
					</button>
					<nav
						className={`
							${menu ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
							flex flex-col transition items-center justify-center fixed inset-0 z-40 bg-blue-900 text-2xl gap-4
							sm:opacity-100 sm:relative sm:bg-transparent sm:flex-row sm:text-sm sm:gap-8 sm:pointer-events-auto
						`}
					>
						<button
							title='Fechar menu'
							className='fixed right-4 top-4 sm:hidden'
							onClick={() => setMenu(false)}
						>
							<MdClose size={28} />
						</button>
						<a href='/sobre-nos'>Sobre nós</a>
						<a href='/servicos'>Serviços</a>
					</nav>
				</div>
			</Container>
		</header>
	)
}
