import { ComponentProps } from 'react'

interface LoadingProps extends ComponentProps<'div'> {
	show?: boolean
	type?: 'full' | 'component' | 'animation'
	backgroundColor?: string
}

export function Loading({ show = true, type = 'full', backgroundColor = 'bg-gray-300', ...rest }: LoadingProps) {
	if (type === 'component') {
		return <div className={`${backgroundColor} animate-pulse duration-300 ${rest.className}`}></div>
	}

	if (type === 'animation') {
		return (
			<div className='scale-50'>
				<div title='Carregando...' className='size-full animate-spin rounded-full border border-t-secondary border-r-secondary' />
			</div>
		)
	}
	return (
		<div
			className={`
				${show ? 'opacity-100 ' : 'opacity-0 '}
				bg-slate-100/95 fixed inset-0 z-30 transition pointer-events-none flex justify-center items-center
		`}
		>
			<div title='Carregando...' className='border-slate-300 h-16 w-16 animate-spin rounded-full border-4 border-t-primary' />
		</div>
	)
}
