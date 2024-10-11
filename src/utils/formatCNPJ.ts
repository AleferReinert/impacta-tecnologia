// Obtem os 14 números do CNPJ e formata: 98.987.987/0001-98
export function formatCNPJ(cnpj: string): string {
	const cleaned = cnpj.replace(/\D/g, '')
	return cleaned.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
}
