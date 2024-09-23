import { ComponentProps, ReactNode } from 'react'

interface CommonProps {
	variant?: 'outline-white' | 'outline-secondary' | 'fill'
	full?: boolean
	asLink?: boolean
	children: ReactNode
}

interface AsLinkProps extends ComponentProps<'a'> {}
interface AsButtonProps extends ComponentProps<'button'> {}

type ButtonProps = (AsLinkProps & CommonProps) | (AsButtonProps & CommonProps)

export function Button({ asLink = false, variant = 'outline-secondary', full, children, ...rest }: ButtonProps) {
	const outlineWhite = 'border border-white text-white hover:bg-white hover:border-white hover:text-secondary'
	const outlineSecondary = 'border border-secondary text-secondary hover:bg-primary hover:border-primary hover:text-white'
	const fill = 'bg-secondary text-white hover:bg-primary hover:text-white'
	const styles = `
		${variant === 'outline-white' ? outlineWhite : variant === 'outline-secondary' ? outlineSecondary : fill} 
		${full ? 'w-full text-center' : 'max-w-fit flex'}
		gap-1 items-center h-10 px-4 transition`

	if (asLink) {
		return (
			<a {...(rest as AsLinkProps)} className={rest.className + '' + styles}>
				{children}
			</a>
		)
	}

	return (
		<button {...(rest as AsButtonProps)} className={rest.className + ' ' + styles}>
			{children}
		</button>
	)
}
