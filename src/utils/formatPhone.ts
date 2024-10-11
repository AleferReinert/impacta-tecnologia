// Formata os digitos do telefone: (99) 99922-3344 / (99) 9922-3344
export function formatPhone(phone: string): string {
	const cleaned = phone.replace(/\D/g, '')

	const isTenDigits = cleaned.length === 10

	if (isTenDigits) {
		return cleaned.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3')
	} else {
		return cleaned.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')
	}
}
