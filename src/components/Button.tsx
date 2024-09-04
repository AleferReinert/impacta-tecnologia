import { ReactNode } from 'react'
interface ButtonProps {
	children: ReactNode
	asLink?: boolean
	url?: string
	theme?: 'outline' | 'fill'
	themeColor?: 'white' | 'secondary'
	full?: boolean
}
export function Button({
	children,
	url,
	asLink,
	theme = 'outline',
	themeColor = 'secondary',
	full
}: ButtonProps) {
	const themeStyles = theme === 'outline' ? 'border' : 'bg-primary text-white'
	const themeColorStyles =
		themeColor === 'white'
			? 'border-white text-white hover:bg-white hover:text-secondary'
			: 'border-secondary text-secondary hover:bg-secondary hover:text-white'
	const fullStyles = full ? 'w-full text-center' : 'max-w-fit flex'
	const styles = `${themeStyles} ${fullStyles} ${themeColorStyles} gap-1 items-center h-10 px-4 transition`

	if (asLink) {
		return (
			<a href={url} className={styles}>
				{children}
			</a>
		)
	}
	return <button className={styles}>{children}</button>
}
