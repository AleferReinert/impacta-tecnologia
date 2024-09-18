interface SubtitleProps {
	children: string
}

export function Subtitle({ children }: SubtitleProps) {
	return (
		<h2 className='font-semibold text-xl text-secondary font-heading uppercase tracking-wide'>{children}</h2>
	)
}
