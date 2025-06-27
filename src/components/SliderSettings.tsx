import { convertToMilliseconds } from '@/utils/convertToMilliseconds'
import { Settings } from 'react-slick'

export interface SliderConfigProps {
	effect: 'Fade' | 'Scroll'
	scrollSpeed: string
	transitionSpeed: string
}

interface SliderSettingsProps extends SliderConfigProps {
	itemsLength: number
	dotsClass?: string
}

export function SliderSettings({ effect, scrollSpeed, transitionSpeed, itemsLength, dotsClass }: SliderSettingsProps) {
	const settings: Settings = {
		adaptiveHeight: itemsLength === 1 ? true : false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: scrollSpeed ? convertToMilliseconds(scrollSpeed) : 5000,
		customPaging: i => <button aria-label={`Ir para o item ${i + 1}`}></button>,
		dots: itemsLength > 1 ? true : false,
		dotsClass: `custom-dots ${dotsClass ? dotsClass : ''}`,
		fade: effect === 'Fade' ? true : false,
		infinite: true,
		pauseOnHover: false,
		speed: transitionSpeed ? convertToMilliseconds(transitionSpeed) : 500
	}

	return settings
}
