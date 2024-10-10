import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

interface LoadingProps extends ComponentProps<'div'> {
	show?: boolean
	type?: 'full' | 'component' | 'animation'
	showLoad?: boolean
}

const loadingStyles = tv({
	base: 'flex justify-center items-center',
	variants: {
		type: {
			full: 'bg-slate-100/95 fixed inset-0 z-30 transition pointer-events-none',
			component: 'animate-pulse duration-300 bg-gray-300 py-6',
			animation: 'scale-50'
		},
		show: {
			true: 'opacity-100',
			false: 'opacity-0'
		}
	},
	defaultVariants: {
		type: 'full',
		show: true
	}
})

export function Loading({ show = true, type = 'full', showLoad = false, ...rest }: LoadingProps) {
	const message = 'Carregando...'
	const load = <div className='border-slate-300 h-16 w-16 animate-spin rounded-full border-4 border-t-primary' />

	if (type === 'component') {
		return (
			<div title={message} className={`${loadingStyles({ type })} ${rest.className ?? rest.className}`}>
				{showLoad ? load : null}
			</div>
		)
	}

	if (type === 'animation') {
		return (
			<div title={message} className={`${loadingStyles({ type })} ${rest.className ?? rest.className}`}>
				<div className='size-full animate-spin rounded-full border border-t-secondary border-r-secondary' />
			</div>
		)
	}

	return (
		<div title={message} className={`${loadingStyles({ type, show })} ${rest.className ?? rest.className}`}>
			{load}
		</div>
	)
}
