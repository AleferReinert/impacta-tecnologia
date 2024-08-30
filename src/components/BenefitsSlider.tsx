'use client'
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const benefitItems = [
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

export function BenefitsSlider() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		dotsClass: 'custom-dots'
	}
	return (
		<Slider {...settings}>
			{benefitItems.map((benefit, index) => (
				<li key={index} className='text-center mb-10'>
					<h3 className='font-semibold text-xl'>{benefit.title}</h3>
					<p className='max-w-screen-sm mx-auto'>{benefit.description}</p>
				</li>
			))}
		</Slider>
	)
}
