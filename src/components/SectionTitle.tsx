import { ReactNode } from 'react'

interface SectionTitleProps {
	children: ReactNode
	direction?: 'left' | 'center'
}

export function SectionTitle({ children, direction = 'center' }: SectionTitleProps) {
	return (
		<h2
			className={`${
				direction === 'center' ? 'text-center mx-auto' : ''
			} text-primary font-medium text-3xl max-w-fit mb-5`}
		>
			{children}
			<span
				className={`${direction === 'center' ? 'mx-auto' : ''} block w-20 h-[1px] bg-slate-400 my-2`}
			></span>
		</h2>
	)
}
