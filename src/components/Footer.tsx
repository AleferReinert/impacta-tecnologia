import { EnterpriseProps } from '@/app/layout'
import { formatCNPJ } from '@/utils/formatCNPJ'
import { formatPhone } from '@/utils/formatPhone'
import { ReactNode } from 'react'
import { Container } from './Container/Container'
import { SocialLinks } from './SocialLinks'

export interface FooterProps {
	enterprise: EnterpriseProps
}

export function Footer({ enterprise }: FooterProps) {
	const { name, cnpj, email, phone, businessHours, socialLinks } = enterprise

	const renderInfo = (label: string, value?: string | ReactNode) => {
		if (!value) return null
		return (
			<span className='leading-7 md:leading-normal'>
				{label}: {value}
				<br />
			</span>
		)
	}

	const renderColHeading = (title: string) => {
		return <h6 className='text-base mb-1 font-heading uppercase md:text-left md:text-sm'>{title}</h6>
	}

	return (
		<footer className='z-10 py-6 font-light text-center bg-secondary text-white border-t border-slate-300 md:text-sm md:text-left md:py-8'>
			<Container>
				<div className='flex flex-col gap-4 md:flex-row md:justify-between [&>div]:flex [&>div]:flex-col [&>div]:justify-between'>
					<div>
						{renderColHeading(name ?? 'Impacta Tecnologia & Soluções em TI')}
						<p>
							{renderInfo(businessHours!.title, businessHours?.content)}
							{renderInfo('CNPJ', formatCNPJ(cnpj!))}
						</p>
					</div>
					<div>
						<div className='hidden md:block'>{renderColHeading('Contato')}</div>
						<p>
							{renderInfo(
								'Tel.',
								<a title='Ligar' href={`tel:${phone}`}>
									{formatPhone(phone!)}
								</a>
							)}
							{renderInfo(
								'E-mail',
								<a title='Enviar e-mail' href={`mailto:${email}`}>
									{email}
								</a>
							)}
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
