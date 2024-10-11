// Obtem os digitos de um texto e transforma em milisegundos:
// 'Normal_5_segundos' = 5000
// 'Normal_0_5_segundos' = 500
export function convertToMilliseconds(input: string): number {
	let numbers = input.replace(/\D/g, '')

	if (numbers.startsWith('0')) {
		numbers = numbers[0] + '.' + numbers.slice(1)
	} else if (numbers.length === 2) {
		return parseFloat(numbers) * 100
	}

	return parseFloat(numbers) * 1000
}
