import { DynamicIcon } from './DynamicIcon'

interface SocialLinkProps {
	title: string
	url: string
	icon: string
}

export interface SocialLinksProps {
	socialLinks: SocialLinkProps[]
}

export function SocialLinks({ socialLinks }: SocialLinksProps) {
	return (
		<nav className='flex justify-center gap-5'>
			{socialLinks.map((item, index) => (
				<a
					key={index}
					title={item.title}
					href={item.url}
					target='_blank'
					className='[&_svg]:size-8 [&_svg]:md:size-6 [&_svg]:fill-secondary [&_svg]:transition [&_svg]:hover:fill-primary'
				>
					<DynamicIcon icon={item.icon} />
				</a>
			))}
		</nav>
	)
}
