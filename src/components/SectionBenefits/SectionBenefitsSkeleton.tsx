import { Section } from '../Section/Section'

export function SectionBenefitsSkeleton() {
	return (
		<Section theme='dark' className='text-center'>
			<div className='leading-[0] animate-pulse'>
				<div className='w-full max-w-[370px] h-[31px] bg-slate-300 inline-block rounded-md' />
				<hr className='mx-auto w-10 border-primary my-5' />
				<div className='w-full max-w-[190px] h-[24px] mb-2 bg-slate-300 inline-block rounded-md' />
				<br />
				<div className='w-full max-w-[640px] h-[40px] bg-slate-300 inline-block rounded-md' />
			</div>
		</Section>
	)
}
