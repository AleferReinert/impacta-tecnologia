import { Container } from './Container'
import { SocialLinks, SocialLinksProps } from './SocialLinks'

export interface FooterProps extends SocialLinksProps {
	enterpriseName: string
}

export function Footer({ enterpriseName, socialLinks }: FooterProps) {
	return (
		<footer className='py-6 text-center text-sm border-t border-slate-300 sm:py-5'>
			<Container>
				<div className='sm:flex sm:flex-row-reverse sm:justify-between sm:items-center'>
					<SocialLinks socialLinks={socialLinks} />
					<p className='text-secondary'>{enterpriseName}</p>
				</div>
			</Container>
		</footer>
	)
}
