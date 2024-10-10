import { tv } from 'tailwind-variants'
import { DynamicReactIcon } from '../DynamicReactIcon/DynamicReactIcon'

export interface SocialLinkProps {
	title: string
	url: string
	icon: string
}

export interface SocialLinksProps {
	socialLinks: SocialLinkProps[]
	iconColor?: 'light' | 'dark'
}

const linkStyles = tv({
	base: 'transition [&>*]:hover:fill-primary [&>*]:transition',
	variants: {
		color: {
			light: 'fill-white',
			dark: 'fill-secondary'
		}
	},
	defaultVariants: {
		color: 'light'
	}
})

export function SocialLinks({ socialLinks, iconColor = 'light' }: SocialLinksProps) {
	return (
		<nav data-testid='SocialLinksComponent' className='flex justify-center gap-5'>
			{socialLinks.map((item, index) => (
				<a key={index} title={item.title} href={item.url} target='_blank' rel='noopener noreferrer'>
					<DynamicReactIcon name={item.icon} className={`${linkStyles({ color: iconColor })} size-8 md:size-6`} />
				</a>
			))}
		</nav>
	)
}
