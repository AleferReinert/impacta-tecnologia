import { Container } from './Container'
import DynamicReactIcon from './DynamicReactIcon'
import { Subtitle } from './Subtitle'

export interface BoxContentProps {
	title: string
	description: string
	icon: string
	variant: 'light' | 'dark'
}

export function BoxContent({ title, description, icon, variant = 'light' }: BoxContentProps) {
	return (
		<div className={`${variant === 'dark' ? 'bg-slate-100' : ''} py-10`}>
			<Container>
				<div
					className={`${
						variant === 'light' ? 'flex-row-reverse justify-end' : 'justify-between'
					} flex items-center`}
				>
					<div className={`${variant === 'dark' ? 'border-l-4 border-secondary px-8' : ''} sm:px-10`}>
						<Subtitle>{title}</Subtitle>
						<div className='pt-3 flex flex-col gap-3' dangerouslySetInnerHTML={{ __html: description }}></div>
					</div>
					<div className='hidden sm:block [&_svg]:size-36'>
						<DynamicReactIcon name={icon} />
					</div>
				</div>
			</Container>
		</div>
	)
}
