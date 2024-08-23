import { ReactNode } from 'react'
interface ContainerProps {
	children: ReactNode
}
export function Container({ children }: ContainerProps) {
	return <div className='mx-auto max-w-5xl px-4'>{children}</div>
}
