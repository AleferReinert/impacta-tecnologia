import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

const navigation = [
	{ title: 'Sobre nós', url: '/sobre-nos' },
	{ title: 'Serviços', url: '/servicos' },
	{ title: 'Contato', url: '/contato' }
]

interface MenuLinkProps {
	setMenu?: Dispatch<SetStateAction<boolean>>
}

export function MenuLinks({ setMenu }: MenuLinkProps) {
	return (
		<>
			{navigation.map((item, index) => (
				<Link
					key={index}
					href={item.url}
					onClick={() => setMenu && setMenu(false)}
					className='text-secondary hover:text-primary [&>span]:hover:w-full'
				>
					{item.title}
					<span className='block w-0 mx-auto h-[1px] bg-primary translate-y-1 transition-all'></span>
				</Link>
			))}
		</>
	)
}
