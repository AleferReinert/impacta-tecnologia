import { BoxContent } from '@/components/BoxContent'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { PageTitle } from '@/components/PageTitle'
import { Subtitle } from '@/components/Subtitle'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { PiEye } from 'react-icons/pi'
import { RiCustomerService2Fill, RiSearchLine, RiUserStarLine } from 'react-icons/ri'
import { RxUpdate } from 'react-icons/rx'
import { TfiTarget } from 'react-icons/tfi'

const items = [
	{
		title: 'Foco no Cliente',
		description:
			'Colocamos as necessidades dos clientes em primeiro lugar, garantindo uma experiência excepcional.'
	},
	{
		title: 'Excelência no Atendimento',
		description: 'Prestamos serviços e fornecemos produtos com o mais alto padrão de qualidade.'
	},
	{
		title: 'Transparência e Integridade',
		description: 'Conduzimos nossos negócios com total honestidade e clareza.'
	},
	{
		title: 'Inovação Constante',
		description: 'Mantemos nossas ofertas atualizadas com as últimas inovações tecnológicas.'
	},
	{
		title: 'Proatividade',
		description: 'Agimos com antecipação para resolver desafios de forma eficiente e eficaz.'
	}
]

const icons = [RiUserStarLine, RiCustomerService2Fill, RiSearchLine, RxUpdate, AiOutlineThunderbolt]

export default function About() {
	return (
		<Layout>
			<PageTitle>Sobre nós</PageTitle>

			<Container>
				<p className='text-center py-10 leading-loose'>
					A{' '}
					<strong className='text-secondary not-italic font-semibold'>
						Impacta Tecnologia & Soluções em TI
					</strong>{' '}
					está aqui para levar sua tecnologia a um novo patamar.
					<br />
					Descubra como podemos ajudar você a alcançar seus objetivos tecnológicos com eficiência e inovação.
				</p>
			</Container>

			<BoxContent
				variant='dark'
				icon={TfiTarget}
				title='Missão'
				description='Nossa missão é fornecer soluções tecnológicas de ponta, com foco no cliente, por meio da
								locação de equipamentos de TI, suporte técnico especializado e hardware de alta qualidade.
								Comprometemo-nos a fornecer um atendimento excepcional, assegurando a satisfação total dos
								nossos clientes.'
			/>
			<BoxContent
				icon={PiEye}
				title='Visão'
				description='Como referência em soluções tecnológicas e atendimento ao cliente, somos movidos pela nossa
								paixão por tecnologia e pelo compromisso com a excelência. Focados no cliente final,
								continuamos a transformar desafios em oportunidades, oferecendo serviços de alta qualidade que
								superem expectativas e impulsionam o sucesso e o crescimento dos nossos clientes.'
			/>

			<div className='bg-slate-100 py-10'>
				<Container>
					<Subtitle>Valores</Subtitle>
					<ul className='py-3 gap-4 mt-3'>
						{items.map((item, index) => {
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
		</Layout>
	)
}
