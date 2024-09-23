interface FormFieldProps {
	label: string
	name: string
	fieldType?: 'input' | 'textarea'
	inputType?: 'text' | 'email'
	placeholder?: string
	value?: string
	onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export function FormField({
	label,
	name,
	fieldType = 'input',
	inputType = 'text',
	placeholder = '',
	value,
	onChange
}: FormFieldProps) {
	const styles =
		'border border-slate-300	 py-2 px-3 font-normal w-full mb-3 bg-transparent text-sm focus:outline-none focus:border-slate-500'

	return (
		<>
			<label htmlFor={name} className='text-secondary font-medium text-sm cursor-pointer mb-1'>
				<span className='text-red-500'>* </span>
				{label}:
			</label>
			{fieldType === 'input' ? (
				<input
					id={name}
					type={inputType}
					value={value}
					onChange={onChange}
					name={name}
					placeholder={placeholder}
					className={`${styles} h-10`}
					required
				/>
			) : (
				<textarea
					id={name}
					onChange={onChange}
					name={name}
					placeholder={placeholder}
					className={`${styles} resize-none h-32`}
					required
				/>
			)}
		</>
	)
}
