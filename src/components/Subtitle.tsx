interface SubtitleProps {
	children: string
}
export function Subtitle({ children }: SubtitleProps) {
	return <h2 className='font-semibold text-xl text-secondary'>{children}</h2>
}
