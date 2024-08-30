import { ReactNode } from 'react'

interface ServiceItemProps {
	title: string
	shortDescription: string
	icon: ReactNode
}
export function ServiceItem({ title, icon, shortDescription }: ServiceItemProps) {
	return (
		<li className='text-center'>
			<div className='border rounded-full flex justify-center w-48 h-48 items-center mx-auto border-black mb-4'>
				{icon}
			</div>
			<h2 className='font-semibold'>{title}</h2>
			<p>{shortDescription}</p>
		</li>
	)
}
