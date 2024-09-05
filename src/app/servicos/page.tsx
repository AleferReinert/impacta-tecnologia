import { BoxContent } from '@/components/BoxContent'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { PageTitle } from '@/components/PageTitle'
import { Subtitle } from '@/components/Subtitle'
import { PiEye } from 'react-icons/pi'
import { RiCustomerService2Fill, RiSearchLine, RiUserStarLine } from 'react-icons/ri'
import { RxUpdate } from 'react-icons/rx'

const services = [
	{
		title: 'Instalação e Configuração',
		description: 'Configuração e instalação de sistemas e equipamentos de TI.'
	},
	{
		title: 'Suporte Técnico',
		description: 'Atendimento eficiente e resolução de problemas técnicos.'
	},
	{
		title: 'Consultoria em TI',
		description: 'Análise e recomendações para otimização dos seus sistemas de TI.'
	},
	{
		title: 'Manutenção e Atualização',
		description: 'Serviços contínuos para manter seu ambiente tecnológico sempre atualizado e funcionando.'
	}
]

const icons = [RiUserStarLine, RiCustomerService2Fill, RiSearchLine, RxUpdate]

export default function Services() {
	return (
		<Layout>
			<PageTitle>Serviços</PageTitle>

			<BoxContent
				icon={PiEye}
				title='Locação de Equipamentos de TI'
				description='Oferecemos uma ampla gama de equipamentos de TI para locação, desde laptops e desktops até
								servidores e equipamentos de rede. Nossos serviços de locação são ideais para empresas que
								precisam de soluções flexíveis e de curto prazo, seja para eventos, projetos temporários ou
								expansões rápidas. Garantimos que nossos equipamentos sejam mantidos em perfeito estado e
								estejam sempre atualizados com as mais recentes tecnologias.'
			/>
			<div className='bg-slate-100 py-10'>
				<Container>
					<Subtitle>Prestação de Serviços de TI</Subtitle>
					<p className='py-3'>
						Nosso time de especialistas está pronto para oferecer suporte técnico e consultoria personalizada
						para resolver quaisquer desafios tecnológicos que sua empresa possa enfrentar. Entre os nossos
						serviços, destacam-se:
					</p>
					<ul className='py-3 gap-4'>
						{services.map((item, index) => {
							const Icon = icons[index]
							return (
								<li
									key={index}
									className='p-8 gap-8 odd:bg-slate-200 flex items-center border-l-4 even:border-transparent odd:border-secondary'
								>
									<div className='hidden sm:block'>
										<Icon size={40} className='fill-secondary text-secondary' />
									</div>
									<div>
										<h3 className='text-secondary font-medium'>{item.title}</h3>
										<p>{item.description}</p>
									</div>
								</li>
							)
						})}
					</ul>
				</Container>
			</div>
			<BoxContent
				icon={PiEye}
				title='Venda de Hardware e Periféricos'
				description='Disponibilizamos uma vasta seleção de hardware e periféricos de qualidade superior para
								atender às suas necessidades específicas. De desktops e laptops a impressoras e acessórios,
								garantimos produtos de marcas renomadas e com garantia de performance e durabilidade. Nossa
								equipe está pronta para ajudar você a escolher os produtos que melhor atendem às suas
								necessidades e orçamento.'
			/>
		</Layout>
	)
}
