import { tv } from 'tailwind-variants'
import { Container } from '../Container/Container'
import DynamicReactIcon from '../DynamicReactIcon'
import { Subtitle } from '../Subtitle/Subtitle'

export interface BoxContentProps {
	title: string
	description: string
	icon: string
	theme: 'light' | 'dark'
}

const boxStyles = tv({
	base: 'py-10',
	variants: {
		theme: {
			light: '',
			dark: 'bg-slate-100'
		}
	},
	defaultVariants: {
		theme: 'light'
	}
})

const contentWrapperStyles = tv({
	base: 'flex items-center',
	variants: {
		theme: {
			light: 'flex-row-reverse justify-end',
			dark: 'justify-between'
		}
	},
	defaultVariants: {
		theme: 'light'
	}
})

const contentStyles = tv({
	base: 'sm:px-10',
	variants: {
		theme: {
			dark: 'border-l-4 border-secondary px-8',
			light: ''
		}
	}
})

export function BoxContent({ title, description, icon, theme = 'light' }: BoxContentProps) {
	return (
		<div className={boxStyles({ theme })}>
			<Container>
				<div className={contentWrapperStyles({ theme })}>
					<div className={contentStyles({ theme })}>
						<Subtitle title={title} />
						<div className='pt-3 flex flex-col gap-3' dangerouslySetInnerHTML={{ __html: description }}></div>
					</div>
					<div className='hidden sm:block [&>*]:size-36'>
						<DynamicReactIcon name={icon} />
					</div>
				</div>
			</Container>
		</div>
	)
}
