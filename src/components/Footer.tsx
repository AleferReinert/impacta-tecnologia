import { Container } from './Container'
import { EnterpriseProps } from './Layout'
import { SocialLinks } from './SocialLinks'

export interface FooterProps {
	enterprise: EnterpriseProps
}

export function Footer({ enterprise }: FooterProps) {
	return (
		<footer className='py-6 text-center text-sm border-t border-slate-300 sm:py-5'>
			<Container>
				<div className='sm:flex sm:flex-row-reverse sm:justify-between sm:items-center'>
					<SocialLinks socialLinks={enterprise.socialLinks} />
					<p className='text-secondary'>{enterprise.name}</p>
				</div>
			</Container>
		</footer>
	)
}
