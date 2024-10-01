export function convertToMilliseconds(input: string): number {
	let numbers = input.replace(/\D/g, '')

	if (numbers.startsWith('0')) {
		numbers = numbers[0] + '.' + numbers.slice(1)
	} else if (numbers.length === 2) {
		return parseFloat(numbers) * 100
	}

	return parseFloat(numbers) * 1000
}

// Exemplos de uso
// console.log(convertToMilliseconds('Normal_5_segundos')) // 5000
// console.log(convertToMilliseconds('Normal_0_5_segundos')) // 500
// console.log(convertToMilliseconds('Normal_0_75_segundos')) // 750
// console.log(convertToMilliseconds('Tempo_3_2_segundos')) // 3200
// console.log(convertToMilliseconds('Teste_10_segundos')) // 10000
// console.log(convertToMilliseconds('Valor_7_segundos_ou_menos')) // 7000
