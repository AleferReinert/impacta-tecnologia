import { ReactNode } from 'react'
interface ButtonProps {
	children: ReactNode
	asLink?: boolean
	url?: string
	theme?: 'outline' | 'fill'
	full?: boolean
}
export function Button({ children, url, asLink, theme = 'outline', full }: ButtonProps) {
	const themeStyles = theme === 'outline' ? 'border border-secondary text-secondary' : 'bg-primary text-white'
	const fullStyles = full ? 'w-full text-center' : 'max-w-fit mx-auto flex'
	const styles = `${themeStyles} ${fullStyles} gap-1 items-center h-10 px-4 transition hover:bg-secondary hover:text-white`

	if (asLink) {
		return (
			<a href={url} className={styles}>
				{children}
			</a>
		)
	}
	return <button className={styles}>{children}</button>
}
