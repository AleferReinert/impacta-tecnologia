import { ReactNode } from 'react'
interface ButtonProps {
	children: ReactNode
	asLink?: boolean
	url?: string
}
export function Button({ children, url, asLink }: ButtonProps) {
	const styles = `border-2 border-primary mx-auto block max-w-fit text-primary py-2 px-4
		hover:bg-primary hover:text-white transition`

	if (asLink) {
		return (
			<a href={url} className={styles}>
				{children}
			</a>
		)
	}
	return <button className={styles}>{children}</button>
}
