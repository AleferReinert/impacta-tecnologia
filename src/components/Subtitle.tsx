interface SubtitleProps {
	children: string
}
export function Subtitle({ children }: SubtitleProps) {
	return <h2 className='font-bold text-xl mt-6'>{children}</h2>
}
