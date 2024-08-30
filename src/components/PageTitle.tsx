interface PageTitleProps {
	children: string
}
export function PageTitle({ children }: PageTitleProps) {
	return <h1 className='font-bold text-4xl mt-12 mb-5 text-primary'>{children}</h1>
}
