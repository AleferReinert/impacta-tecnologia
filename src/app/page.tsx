import { BenefitsSlider } from '@/components/BenefitsSlider'
import { Button } from '@/components/Button'
import { ContactForm } from '@/components/ContactForm'
import { Layout } from '@/components/Layout'
import { Section } from '@/components/Section'
import { SectionTitle } from '@/components/SectionTitle'
import { ServiceItem } from '@/components/ServiceItem'
import { FaMouse, FaTools } from 'react-icons/fa'
import { FaComputer } from 'react-icons/fa6'

export default function Home() {
	return (
		<Layout>
			<Section>
				<SectionTitle>Sobre nós</SectionTitle>
				<p>
					Nossa paixão por tecnologia nos impulsiona a oferecer soluções completas que atendem perfeitamente
					às suas necessidades de TI.
				</p>
				<p>
					Com ampla experiência e um compromisso firme com a excelência, fornecemos locação de equipamentos,
					suporte técnico especializado e vendas de hardware e periféricos de alta qualidade.
				</p>
				<p className='mb-10'>
					Nosso objetivo é não apenas impulsionar o crescimento dos nossos clientes, mas também ajudá-los a
					economizar com equipamentos de primeira linha, mantendo sempre o mais alto padrão de suporte.
				</p>
				<Button asLink url='/sobre-nos'>
					Saiba mais
				</Button>
			</Section>

			<Section>
				<SectionTitle>Serviços</SectionTitle>
				<ul className='grid grid-cols-3 mt-10 mb-10'>
					<ServiceItem
						icon={<FaComputer size='80' />}
						title='Locação de Equipamentos de TI'
						shortDescription='Laptops, desktops, servidores e equipamentos de rede'
					/>
					<ServiceItem
						icon={<FaTools size='80' />}
						title='Prestação de Serviços de TI'
						shortDescription='Suporte técnico e consultoria personalizada'
					/>
					<ServiceItem
						icon={<FaMouse size='80' />}
						title='Venda de Hardware e Periféricos'
						shortDescription='Produtos de marcas com garantia de performance e durabilidade'
					/>
				</ul>
				<Button asLink url='/servicos'>
					Saiba mais
				</Button>
			</Section>

			<Section>
				<SectionTitle>Por que escolher Impacta Tecnologia & Soluções em TI?</SectionTitle>
				<BenefitsSlider />
			</Section>

			<Section>
				<SectionTitle>Contato</SectionTitle>
				<p className='mb-10'>
					Entre em contato conosco para saber mais sobre nossos serviços e como podemos ajudar a transformar a
					forma como sua empresa utiliza a tecnologia.
				</p>
				<ContactForm />
			</Section>
		</Layout>
	)
}

