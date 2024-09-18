export function formatCNPJ(cnpj: string): string {
	// Remove todos os caracteres que não sejam números
	const cleaned = cnpj.replace(/\D/g, '')

	// Aplica a máscara de CNPJ
	return cleaned.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
}
