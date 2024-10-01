interface SubtitleProps {
	title: string
}

export function Subtitle({ title }: SubtitleProps) {
	return <h2 className='font-semibold text-xl text-secondary font-heading uppercase tracking-wide'>{title}</h2>
}
