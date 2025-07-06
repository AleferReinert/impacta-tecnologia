export function ContactFormSkeleton() {
	return (
		<div className='max-w-[384px] mx-auto'>
			<div className='leading-[0] animate-pulse'>
				<div className='w-16 h-5 bg-slate-200 mb-1 rounded-md' />
				<div className='h-10 bg-slate-200 mb-3' />

				<div className='w-16 h-5 bg-slate-200 mb-1  rounded-md' />
				<div className='h-10 bg-slate-200 mb-3' />

				<div className='w-16 h-5 bg-slate-200 mb-1  rounded-md' />
				<div className='h-[128px] bg-slate-200 mb-3' />

				<div className='h-10 bg-slate-200 mb-3' />
			</div>
		</div>
	)
}
