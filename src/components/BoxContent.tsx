import { IconType } from 'react-icons'
import { Container } from './Container'
import { Subtitle } from './Subtitle'

interface BoxContentProps {
	title: string
	description: string
	icon: IconType
	variant?: 'light' | 'dark'
}

export function BoxContent({ title, description, icon, variant = 'light' }: BoxContentProps) {
	const Icon = icon

	return (
		<div className={`${variant === 'dark' ? 'bg-slate-100' : ''} py-10`}>
			<Container>
				<div className={`${variant === 'light' ? 'flex-row-reverse' : ''} flex justify-between items-center`}>
					<div className={`${variant === 'dark' ? 'border-l-4 border-secondary' : ''} px-8 sm:px-10`}>
						<Subtitle>{title}</Subtitle>
						<p className='py-3'>{description}</p>
					</div>
					<div className='hidden sm:block'>
						<Icon size={140} />
					</div>
				</div>
			</Container>
		</div>
	)
}
