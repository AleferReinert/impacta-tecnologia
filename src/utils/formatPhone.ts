export function formatPhone(phone: string): string {
	// Remove todos os caracteres que não sejam números
	const cleaned = phone.replace(/\D/g, '')

	// Verifica se o telefone tem 10 ou 11 dígitos
	const isElevenDigits = cleaned.length === 11

	// Aplica a máscara correta
	if (isElevenDigits) {
		return cleaned.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')
	} else {
		return cleaned.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3')
	}
}
