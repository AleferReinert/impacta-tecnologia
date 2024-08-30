import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { PageTitle } from '@/components/PageTitle'
import { Subtitle } from '@/components/Subtitle'

export default function Services() {
	return (
		<Layout>
			<Container>
				<PageTitle>Serviços</PageTitle>
				<Subtitle>Locação de Equipamentos de TI</Subtitle>
				<p>
					Oferecemos uma ampla gama de equipamentos de TI para locação, desde laptops e desktops até
					servidores e equipamentos de rede. Nossos serviços de locação são ideais para empresas que precisam
					de soluções flexíveis e de curto prazo, seja para eventos, projetos temporários ou expansões
					rápidas. Garantimos que nossos equipamentos sejam mantidos em perfeito estado e estejam sempre
					atualizados com as mais recentes tecnologias.
				</p>
				<Subtitle>Prestação de Serviços de TI</Subtitle>
				<p>
					Nosso time de especialistas está pronto para oferecer suporte técnico e consultoria personalizada
					para resolver quaisquer desafios tecnológicos que sua empresa possa enfrentar. Entre os nossos
					serviços, destacam-se:
				</p>
				<ul className='list-disc pl-7 gap-3 flex flex-col mt-3'>
					<li>
						<strong>Instalação e Configuração</strong>
						<br />
						Configuração e instalação de sistemas e equipamentos de TI.
					</li>
					<li>
						<strong>Suporte Técnico </strong>
						<br />
						Atendimento eficiente e resolução de problemas técnicos.
					</li>
					<li>
						<strong>Consultoria em TI</strong>
						<br />
						Análise e recomendações para otimização dos seus sistemas de TI.
					</li>
					<li>
						<strong>Manutenção e Atualização</strong>
						<br />
						Serviços contínuos para manter seu ambiente tecnológico sempre atualizado e funcionando sem
						problemas.
					</li>
				</ul>
				<Subtitle>Venda de Hardware e Periféricos</Subtitle>
				<p>
					Disponibilizamos uma vasta seleção de hardware e periféricos de qualidade superior para atender às
					suas necessidades específicas. De desktops e laptops a impressoras e acessórios, garantimos produtos
					de marcas renomadas e com garantia de performance e durabilidade. Nossa equipe está pronta para
					ajudar você a escolher os produtos que melhor atendem às suas necessidades e orçamento.
				</p>
			</Container>
		</Layout>
	)
}
