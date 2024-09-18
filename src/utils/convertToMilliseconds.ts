export function convertToMilliseconds(input: string): number {
	// Remove todos os caracteres que não sejam números ou vírgulas
	const cleaned = input.replace(/[^\d,]/g, '')

	// Substitui vírgulas por pontos para converter números decimais corretamente
	const decimalFormatted = cleaned.replace(',', '.')

	// Converte o valor para número e multiplica por 1000 para converter segundos em milissegundos
	const seconds = parseFloat(decimalFormatted)
	return seconds * 1000
}

// Exemplo de uso:
// console.log(convertToMilliseconds('Curto - 1 segundos')) // 1000
