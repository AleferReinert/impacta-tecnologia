import { Dispatch, SetStateAction } from 'react'
import { MdClose, MdOutlineMenu } from 'react-icons/md'
import { MenuLinks } from './MenuLinks'
import { Social } from './Social'

interface MenuMobileProps {
	menu: boolean
	setMenu: Dispatch<SetStateAction<boolean>>
}

export function MenuMobile({ menu, setMenu }: MenuMobileProps) {
	return (
		<div className='sm:hidden'>
			<button title='Menu' className='text-zinc-900 sm:hidden' onClick={() => setMenu(true)}>
				<MdOutlineMenu size={28} />
			</button>
			<div
				className={`
					flex flex-col transition items-center justify-center fixed inset-0 z-40 bg-white text-secondary text-2xl gap-10
					${menu ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
					`}
			>
				<nav className='text-center flex flex-col gap-4'>
					<button title='Fechar' className='fixed right-4 top-4 sm:hidden' onClick={() => setMenu(false)}>
						<MdClose size={28} />
					</button>
					<MenuLinks />
				</nav>
				<Social />
			</div>
		</div>
	)
}
