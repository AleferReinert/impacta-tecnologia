'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

interface TextSliderProps {
	items: {
		title: string
		description: string
	}[]
}

export function TextSlider({ items }: TextSliderProps) {
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
			{items.map((item, index) => (
				<div key={index} className='text-center mb-10'>
					<h3 className='font-semibold text-secondary'>{item.title}</h3>
					<p className='max-w-screen-sm mx-auto'>{item.description}</p>
				</div>
			))}
		</Slider>
	)
}
