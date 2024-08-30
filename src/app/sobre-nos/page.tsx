import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { PageTitle } from '@/components/PageTitle'
import { Subtitle } from '@/components/Subtitle'

export default function About() {
	return (
		<Layout>
			<Container>
				<PageTitle>Sobre nós</PageTitle>
				<p>
					A Impacta Tecnologia & Soluções em TI está aqui para levar sua tecnologia a um novo patamar.
					Descubra como podemos ajudar você a alcançar seus objetivos tecnológicos com eficiência e inovação.
				</p>
				<Subtitle>Missão</Subtitle>
				<p>
					Nossa missão é fornecer soluções tecnológicas de ponta, com foco no cliente, por meio da locação de
					equipamentos de TI, suporte técnico especializado e hardware de alta qualidade. Comprometemo-nos a
					fornecer um atendimento excepcional, assegurando a satisfação total dos nossos clientes.
				</p>

				<Subtitle>Visão</Subtitle>
				<p>
					Como referência em soluções tecnológicas e atendimento ao cliente, somos movidos pela nossa paixão
					por tecnologia e pelo compromisso com a excelência. Focados no cliente final, continuamos a
					transformar desafios em oportunidades, oferecendo serviços de alta qualidade que superem
					expectativas e impulsionam o sucesso e o crescimento dos nossos clientes.
				</p>

				<Subtitle>Valores</Subtitle>
				<ul className='list-disc pl-7 gap-3 flex flex-col mt-3'>
					<li>
						<strong>Foco no Cliente</strong>
						<br />
						Colocamos as necessidades dos clientes em primeiro lugar, garantindo uma experiência excepcional.
					</li>
					<li>
						<strong>Excelência no Atendimento</strong>
						<br />
						Prestamos serviços e fornecemos produtos com o mais alto padrão de qualidade.
					</li>
					<li>
						<strong>Transparência e Integridade</strong>
						<br />
						Conduzimos nossos negócios com total honestidade e clareza.
					</li>
					<li>
						<strong>Inovação Constante</strong>
						<br />
						Mantemos nossas ofertas atualizadas com as últimas inovações tecnológicas.
					</li>
					<li>
						<strong>Proatividade:</strong>
						<br />
						Agimos com antecipação para resolver desafios de forma eficiente e eficaz.
					</li>
				</ul>
			</Container>
		</Layout>
	)
}
