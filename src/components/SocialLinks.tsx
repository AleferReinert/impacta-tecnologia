import DynamicReactIcon from './DynamicReactIcon'

interface SocialLinkProps {
	title: string
	url: string
	icon: string
}

export interface SocialLinksProps {
	socialLinks: SocialLinkProps[]
	iconColor?: 'light' | 'dark'
}

export function SocialLinks({ socialLinks, iconColor = 'light' }: SocialLinksProps) {
	return (
		<nav className='flex justify-center gap-5'>
			{socialLinks.map((item, index) => (
				<a
					key={index}
					title={item.title}
					href={item.url}
					target='_blank'
					className={`${
						iconColor === 'light' ? '[&_svg]:fill-white' : '[&_svg]:fill-secondary'
					} [&_svg]:size-8 [&_svg]:md:size-6 [&_svg]:transition`}
				>
					<DynamicReactIcon name={item.icon} />
				</a>
			))}
		</nav>
	)
}
