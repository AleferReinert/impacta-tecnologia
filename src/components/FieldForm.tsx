interface FormFieldProps {
	label: string
	name: string
	fieldType?: 'input' | 'textarea'
	inputType?: 'text' | 'email'
	placeholder?: string
}

export function FormField({
	label,
	name,
	fieldType = 'input',
	inputType = 'text',
	placeholder = ''
}: FormFieldProps) {
	const styles =
		'border border-zinc-400	 py-2 px-3 font-normal w-full mb-3 bg-transparent text-sm focus:outline-none focus:border-secondary'

	return (
		<>
			<label htmlFor={name} className='font-medium text-sm cursor-pointer mb-1'>
				<span className='text-red-500'>* </span>
				{label}:
			</label>
			{fieldType === 'input' ? (
				<input
					id={name}
					type={inputType}
					name={name}
					placeholder={placeholder}
					className={`${styles} h-10`}
					required
				/>
			) : (
				<textarea
					id={name}
					name={name}
					placeholder={placeholder}
					className={`${styles} resize-none h-32`}
					required
				/>
			)}
		</>
	)
}
