import { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
	asLink?: boolean
	url?: string
	variant?: 'outline-white' | 'outline-secondary' | 'fill'
	full?: boolean
}

export function Button({ children, url, asLink, variant = 'outline-secondary', full, ...rest }: ButtonProps) {
	const outlineWhite = 'border border-white text-white hover:bg-white hover:border-white hover:text-secondary'
	const outlineSecondary =
		'border border-secondary text-secondary hover:bg-primary hover:border-primary hover:text-white'
	const fill = 'bg-secondary text-white hover:bg-primary hover:text-white'
	const styles = `
		${variant === 'outline-white' ? outlineWhite : variant === 'outline-secondary' ? outlineSecondary : fill} 
		${full ? 'w-full text-center' : 'max-w-fit flex'}
		gap-1 items-center h-10 px-4 transition`

	if (asLink) {
		return (
			<a href={url} className={styles}>
				{children}
			</a>
		)
	}
	return (
		<button className={styles} {...rest}>
			{children}
		</button>
	)
}
