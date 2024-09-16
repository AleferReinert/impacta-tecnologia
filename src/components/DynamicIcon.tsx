import { IconType } from 'react-icons'
import * as aiIcons from 'react-icons/ai'
import * as biIcons from 'react-icons/bi'
import * as bsIcons from 'react-icons/bs'
import * as cgIcons from 'react-icons/cg'
import * as ciIcons from 'react-icons/ci'
import * as diIcons from 'react-icons/di'
import * as faIcons from 'react-icons/fa'
import * as fa6Icons from 'react-icons/fa6'
import * as fcIcons from 'react-icons/fc'
import * as fiIcons from 'react-icons/fi'
import * as giIcons from 'react-icons/gi'
import * as goIcons from 'react-icons/go'
import * as grIcons from 'react-icons/gr'
import * as hiIcons from 'react-icons/hi'
import * as hi2Icons from 'react-icons/hi2'
import * as imIcons from 'react-icons/im'
import * as ioIcons from 'react-icons/io'
import * as io5Icons from 'react-icons/io5'
import * as liaIcons from 'react-icons/lia'
import * as luIcons from 'react-icons/lu'
import * as mdIcons from 'react-icons/md'
import * as piIcons from 'react-icons/pi'
import * as riIcons from 'react-icons/ri'
import * as rxIcons from 'react-icons/rx'
import * as siIcons from 'react-icons/si'
import * as slIcons from 'react-icons/sl'
import * as tbIcons from 'react-icons/tb'
import * as tfiIcons from 'react-icons/tfi'
import * as tiIcons from 'react-icons/ti'
import * as vscIcons from 'react-icons/vsc'
import * as wiIcons from 'react-icons/wi'

interface IconProps {
	lib: string
	icon: string
}

const iconLibraries: Record<string, any> = {
	Ai: aiIcons,
	Bi: biIcons,
	Bs: bsIcons,
	Cg: cgIcons,
	Ci: ciIcons,
	Di: diIcons,
	Fa: faIcons,
	Fa6: fa6Icons,
	Fc: fcIcons,
	Fi: fiIcons,
	Gi: giIcons,
	Go: goIcons,
	Gr: grIcons,
	Hi: hiIcons,
	Hi2: hi2Icons,
	Im: imIcons,
	Io: ioIcons,
	Io5: io5Icons,
	Lia: liaIcons,
	Lu: luIcons,
	Md: mdIcons,
	Pi: piIcons,
	Ri: riIcons,
	Rx: rxIcons,
	Si: siIcons,
	Sl: slIcons,
	Tb: tbIcons,
	Tfi: tfiIcons,
	Ti: tiIcons,
	Vsc: vscIcons,
	Wi: wiIcons
}

export const DynamicIcon = ({ lib, icon }: IconProps) => {
	const iconFormatted = icon.replace(/\s+/g, '')

	const IconComponent: IconType | undefined = iconLibraries[lib]?.[iconFormatted]

	if (IconComponent) {
		return <IconComponent />
	}

	// Icone padrão para quando o icone não for encontrado
	return <faIcons.FaCheck />
}
