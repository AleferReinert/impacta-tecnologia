import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { PageTitle } from '@/components/PageTitle'
import { Subtitle } from '@/components/Subtitle'

export default function About() {
	return (
		<Layout>
			<Container>
				<PageTitle>Sobre nós</PageTitle>
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
				<p>
					<strong>Foco no Cliente:</strong> Colocamos as necessidades dos clientes em primeiro lugar,
					garantindo uma experiência excepcional. <br />
					<strong>Excelência no Atendimento:</strong> Prestamos serviços e fornecemos produtos com o mais alto
					padrão de qualidade. <br />
					<strong>Transparência e Integridade:</strong> Conduzimos nossos negócios com total honestidade e
					clareza. <br />
					<strong>Inovação Constante:</strong> Mantemos nossas ofertas atualizadas com as últimas inovações
					tecnológicas. <br />
					<strong>Proatividade:</strong> Agimos com antecipação para resolver desafios de forma eficiente e
					eficaz.
				</p>
			</Container>
		</Layout>
	)
}
