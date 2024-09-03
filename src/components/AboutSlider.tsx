'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

const aboutItems = [
	'Nossa paixão por tecnologia nos impulsiona a oferecer soluções completas que atendem perfeitamente às suas necessidades de TI.',
	'Com ampla experiência e um compromisso firme com a excelência, fornecemos locação de equipamentos, suporte técnico especializado e vendas de hardware e periféricos de alta qualidade.',
	'Nosso objetivo é não apenas impulsionar o crescimento dos nossos clientes, mas também ajudá-los a economizar com equipamentos de primeira linha, mantendo sempre o mais alto padrão de suporte.'
]

export function AboutSlider() {
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
			{aboutItems.map((item, index) => (
				<div key={index} className='text-center mb-5'>
					<p className='max-w-screen-sm mx-auto'>{item}</p>
				</div>
			))}
		</Slider>
	)
}
