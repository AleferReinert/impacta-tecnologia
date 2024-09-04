import { AboutSlider } from '@/components/AboutSlider'
import { BannersSlider } from '@/components/BannersSlider'
import { BenefitsSlider } from '@/components/BenefitsSlider'
import { Button } from '@/components/Button'
import { ContactForm } from '@/components/ContactForm'
import { Layout } from '@/components/Layout'
import { Section } from '@/components/Section'
import { ServiceItem } from '@/components/ServiceItem'
import { BsArrowRightShort } from 'react-icons/bs'
import { FaMouse, FaTools } from 'react-icons/fa'
import { FaComputer } from 'react-icons/fa6'

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
				<BenefitsSlider />
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

