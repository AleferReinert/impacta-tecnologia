import { ComponentProps } from 'react'

interface LoadingProps extends ComponentProps<'div'> {
	show?: boolean
	type?: 'full' | 'component'
}

export function Loading({ show = true, type = 'full', ...rest }: LoadingProps) {
	if (type === 'component') {
		return <div className={`bg-gray-300 animate-pulse duration-200 ${rest.className}`}></div>
	}
	return (
		<div
			className={`
				${show ? 'opacity-100 ' : 'opacity-0 '}
				bg-slate-100/95 fixed inset-0 z-30 transition pointer-events-none flex justify-center items-center
		`}
		>
			<div
				title='Carregando...'
				className='border-slate-300 h-16 w-16 animate-spin rounded-full border-4 border-t-primary'
			/>
		</div>
	)
}
