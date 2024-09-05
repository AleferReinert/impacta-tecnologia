import { AboutSlider } from '@/components/AboutSlider'
import { BannersSlider } from '@/components/BannersSlider'
import { Button } from '@/components/Button'
import { ContactForm } from '@/components/ContactForm'
import { Layout } from '@/components/Layout'
import { Section } from '@/components/Section'
import { ServiceItem } from '@/components/ServiceItem'
import { TextSlider } from '@/components/TextSlider'
import { BsArrowRightShort } from 'react-icons/bs'
import { FaMouse, FaTools } from 'react-icons/fa'
import { FaComputer } from 'react-icons/fa6'

const benefits = [
	{
		title: 'Qualidade e Confiança',
		description: 'Trabalhamos apenas com equipamentos e produtos de alta qualidade e confiáveis.'
	},
	{
		title: 'Economia Inteligente',
		description:
			'Ajudamos nossos clientes a economizar na receita com soluções de equipamentos que oferecem excelente custo-benefício.'
	},
	{
		title: 'Serviço Personalizado',
		description: 'Oferecemos soluções sob medida para atender às necessidades específicas de cada cliente.'
	},
	{
		title: 'Equipe Especializada',
		description:
			'Contamos com uma equipe de profissionais experientes e capacitados para garantir a melhor experiência.'
	},
	{
		title: 'Suporte Humanizado e Dedicado',
		description:
			'Nosso compromisso é com a sua satisfação, oferecendo um atendimento humanizado e suporte contínuo e eficiente.'
	}
]

export default function Home() {
	return (
		<Layout>
			<BannersSlider />
			<Section title='Impacta Tecnologia & Soluções em TI' theme='dark'>
				<div className='mb-10'>
					<AboutSlider />
				</div>
				<Button asLink url='/sobre-nos'>
					Saiba mais
					<BsArrowRightShort className='w-5 h-5' />
				</Button>
			</Section>

			<Section title='Serviços'>
				<ul className='gap-10 grid grid-cols-1 md:grid-cols-3 mt-10 mb-10'>
					<ServiceItem
						icon={FaComputer}
						title='Locação de Equipamentos de TI'
						shortDescription='Laptops, desktops, servidores e equipamentos de rede'
					/>
					<ServiceItem
						icon={FaTools}
						title='Prestação de Serviços de TI'
						shortDescription='Suporte técnico e consultoria personalizada'
					/>
					<ServiceItem
						icon={FaMouse}
						title='Venda de Hardware e Periféricos'
						shortDescription='Produtos de marcas com garantia de performance e durabilidade'
					/>
				</ul>
				<Button asLink url='/servicos'>
					Saiba mais
					<BsArrowRightShort className='w-5 h-5' />
				</Button>
			</Section>

			<Section theme='dark' title='Por que nos escolher?'>
				<TextSlider items={benefits} />
			</Section>

			<Section title='Contato'>
				<p className='text-center mb-10'>
					Entre em contato conosco para saber mais sobre nossos serviços e como podemos ajudar a transformar a
					forma como sua empresa utiliza a tecnologia.
				</p>
				<ContactForm />
			</Section>
		</Layout>
	)
}

