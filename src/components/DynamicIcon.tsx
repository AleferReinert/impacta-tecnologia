import { IconType } from 'react-icons'
import * as aiIcons from 'react-icons/ai'
import * as biIcons from 'react-icons/bi'
import * as bsIcons from 'react-icons/bs'
import * as faIcons from 'react-icons/fa'
import * as fa6Icons from 'react-icons/fa6'
import * as hiIcons from 'react-icons/hi'
import * as piIcons from 'react-icons/pi'
import * as riIcons from 'react-icons/ri'
import * as rxIcons from 'react-icons/rx'
import * as tbIcons from 'react-icons/tb'
import * as tfiIcons from 'react-icons/tfi'

interface IconProps {
	icon: string
}

export const DynamicIcon = ({ icon }: IconProps) => {
	const iconFormatted = icon.replace(/\s+/g, '')

	const library = () => {
		const match = iconFormatted.match(/^[a-z]*[A-Z][a-z]*[A-Z]/)
		return match ? match[0].slice(0, -1) : ''
	}

	const getIcon = (icon: string) => {
		const iconsMap = new Map()
		iconsMap.set('Bs', bsIcons)
		iconsMap.set('Ai', aiIcons)
		iconsMap.set('Bi', biIcons)
		iconsMap.set('Fa', faIcons)
		iconsMap.set('Tb', tbIcons)
		iconsMap.set('Hi', hiIcons)
		iconsMap.set('Pi', piIcons)
		iconsMap.set('Ri', riIcons)
		iconsMap.set('Rx', rxIcons)
		iconsMap.set('Tfi', tfiIcons)
		return iconsMap.get(library())
	}

	const icons: any = getIcon(iconFormatted)

	if (icons && icons[iconFormatted]) {
		const TheIcon: IconType = icons[iconFormatted]
		return <TheIcon />
	}

	// Se o ícone for da biblioteca 'Fa' e não for encontrado, tenta buscar em 'fa6Icons'
	if (library() === 'Fa' && !(icons as { [key: string]: IconType })[iconFormatted]) {
		if ((fa6Icons as { [key: string]: IconType })[iconFormatted]) {
			const TheIcon: IconType = (fa6Icons as { [key: string]: IconType })[iconFormatted]
			return <TheIcon />
		}
	}

	// Icone padrão para quando o icone não for encontrado
	return <faIcons.FaCheck />
}
