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
		<nav className='flex justify-center gap-4 mb-4 sm:mb-0'>
			{socialLinks.map((item, index) => (
				<a
					key={index}
					title={item.title}
					href={item.url}
					target='_blank'
					className='[&_svg]:w-8 [&_svg]:h-8 [&_svg]:sm:w-6 [&_svg]:sm:h-6 [&_svg]:fill-secondary [&_svg]:transition [&_svg]:hover:fill-primary'
				>
					<DynamicIcon icon={item.icon} />
				</a>
			))}
		</nav>
	)
}
