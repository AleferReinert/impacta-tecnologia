import Link from 'next/link'

const navigation = [
	{ title: 'Início', url: '/' },
	{ title: 'Sobre nós', url: '/sobre-nos' },
	{ title: 'Serviços', url: '/servicos' },
	{ title: 'Contato', url: '/#contato' }
]

export function MenuLinks() {
	return (
		<>
			{navigation.map((item, index) => (
				<Link key={index} href={item.url} className='text-secondary hover:text-primary [&>span]:hover:w-full'>
					{item.title}
					<span className='block w-0 mx-auto h-[1px] bg-primary translate-y-1 transition-all'></span>
				</Link>
			))}
		</>
	)
}
