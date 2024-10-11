import { EnterpriseProps } from '@/app/layout'
import { formatCNPJ } from '@/utils/formatCNPJ'
import { formatPhone } from '@/utils/formatPhone'
import { ReactNode } from 'react'
import { Container } from '../Container/Container'
import { SocialLinks } from '../SocialLinks/SocialLinks'

export interface FooterProps {
	enterprise: Omit<EnterpriseProps, 'favicon' | 'logo' | 'description'>
}

const ColumnHeading = ({ title }: { title: string }) => (
	<h6 className='text-base mb-1 font-heading uppercase md:text-left md:text-sm'>{title}</h6>
)

const InfoItem = ({ label, value }: { label: string; value?: string | ReactNode }) => {
	if (!value) return null
	return (
		<span className='leading-7 md:leading-normal'>
			{label}: {value}
			<br />
		</span>
	)
}

export function Footer({ enterprise }: FooterProps) {
	const { name, cnpj, email, phone, businessHours, socialLinks } = enterprise

	return (
		<footer
			data-testid='FooterComponent'
			className='z-10 py-6 font-light text-center bg-secondary text-white border-t border-slate-300 md:text-sm md:text-left md:py-8'
		>
			<Container>
				<div className='flex flex-col gap-4 md:flex-row md:justify-between [&>div]:flex [&>div]:flex-col [&>div]:justify-between'>
					<div>
						<ColumnHeading title={name} />
						<p>
							<InfoItem label={businessHours.title} value={businessHours.content} />
							<InfoItem label='CNPJ' value={formatCNPJ(cnpj)} />
						</p>
					</div>
					<div>
						<ColumnHeading title='Contato' />
						<p>
							<InfoItem
								label='Tel.'
								value={
									<a title='Ligar' href={`tel:${phone}`}>
										{formatPhone(phone)}
									</a>
								}
							/>
							<InfoItem
								label='E-mail'
								value={
									<a title='Enviar e-mail' href={`mailto:${email}`}>
										{email}
									</a>
								}
							/>
						</p>
					</div>
					{socialLinks.length > 0 && (
						<div>
							<ColumnHeading title='Social' />
							<SocialLinks socialLinks={socialLinks} />
						</div>
					)}
				</div>
			</Container>
		</footer>
	)
}
