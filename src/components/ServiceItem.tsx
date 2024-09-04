import { IconType } from 'react-icons'

interface ServiceItemProps {
	title: string
	shortDescription: string
	icon: IconType
}
export function ServiceItem({ title, icon, shortDescription }: ServiceItemProps) {
	const Icon = icon

	return (
		<li className='text-center'>
			<div className='border rounded-full flex justify-center w-40 h-40 items-center mx-auto mb-4 border-secondary'>
				<Icon size={72} className='fill-secondary' />
			</div>
			<h2 className='font-semibold text-secondary'>{title}</h2>
			<p>{shortDescription}</p>
		</li>
	)
}
