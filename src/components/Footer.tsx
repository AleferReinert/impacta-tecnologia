import { EnterpriseProps } from '@/app/layout'
import { Container } from './Container'
import { SocialLinks } from './SocialLinks'

export interface FooterProps {
	enterprise: EnterpriseProps
}

export function Footer({ enterprise }: FooterProps) {
	const { name, cnpj, email, phone, businessHours, socialLinks } = enterprise

	const renderInfo = (label: string, value?: string) => {
		if (!value) return null
		return (
			<span className='leading-7 md:leading-normal'>
				<span className=' text-secondary'>{label}</span>
				{value}
				<br />
			</span>
		)
	}

	const renderColHeading = (title: string) => {
		return (
			<h6 className='text-secondary font-semibold text-base mb-2 md:text-left md:text-sm md:mb-0'>{title}</h6>
		)
	}

	return (
		<footer className='py-6 text-center border-t border-slate-300 md:text-sm md:text-left'>
			<Container>
				<div className='flex flex-col gap-4 md:flex-row md:justify-between [&>div]:flex [&>div]:flex-col [&>div]:justify-between'>
					<div>
						{renderColHeading(name ?? 'Impacta Tecnologia & Soluções em TI')}
						<p>
							{renderInfo(`${businessHours?.title}: `, businessHours?.content)}
							{renderInfo('CNPJ: ', cnpj)}
						</p>
					</div>
					<div>
						<div className='hidden md:block'>{renderColHeading('Contato')}</div>
						<p>
							{renderInfo('Tel.: ', phone)}
							{renderInfo('E-mail: ', email)}
						</p>
					</div>
					<div>
						<div className='hidden md:block'>{renderColHeading('Social')}</div>

						{socialLinks && <SocialLinks socialLinks={socialLinks} />}
					</div>
				</div>
			</Container>
		</footer>
	)
}
