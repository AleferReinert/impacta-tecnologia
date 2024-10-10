import Link from 'next/link'
import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

interface CommonProps {
	variant?: 'outline-white' | 'outline-secondary' | 'fill'
	full?: boolean
}
interface AsButtonProps extends CommonProps, ComponentProps<'button'> {
	asLink?: false
}
interface AsLinkProps extends CommonProps, ComponentProps<'a'> {
	href: string
	asLink: true
}
type ButtonProps = AsButtonProps | AsLinkProps

const buttonStyles = tv({
	base: 'gap-1 items-center h-10 px-4 transition',
	variants: {
		variant: {
			'outline-white': 'border border-white text-white hover:bg-white hover:border-white hover:text-secondary',
			'outline-secondary': 'border border-secondary text-secondary hover:bg-primary hover:border-primary hover:text-white',
			'fill': 'bg-secondary text-white hover:bg-primary hover:text-white'
		},
		full: {
			true: 'w-full text-center',
			false: 'max-w-fit flex'
		}
	},
	defaultVariants: {
		variant: 'outline-secondary',
		full: false
	}
})

export function Button({ asLink, variant, full, className = '', ...props }: ButtonProps) {
	const combinedStyles = buttonStyles({ variant, full, className })

	if (asLink) {
		return (
			<Link {...(props as AsLinkProps)} className={combinedStyles}>
				{props.children}
			</Link>
		)
	}

	return (
		<button {...(props as AsButtonProps)} className={combinedStyles}>
			{props.children}
		</button>
	)
}
