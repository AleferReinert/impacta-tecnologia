import { ReactNode } from 'react'

interface SectionTitleProps {
	children: ReactNode
}

export function SectionTitle({ children }: SectionTitleProps) {
	return <h2 className='text-primary font-semibold text-center text-3xl mb-5'>{children}</h2>
}
