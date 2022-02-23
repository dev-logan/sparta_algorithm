string = '()))((()'

function solution(string) {
	// 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
	if (string === '') return ''

	// 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
	let index = 0
	let leftCount = 0
	let rightCount = 0
	while (leftCount !== rightCount || (leftCount === 0 && rightCount === 0)) {
		if (string[index++] === '(') {
			leftCount++
		} else {
			rightCount++
		}
	}
	const u = string.substring(0, index)
	const v = string.substring(index)

	// 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
	const uSplit = u.split('')
	let isRight = false
	if (uSplit[0] === '(') {
		const stack = []
		while (uSplit.length) {
			const pop = uSplit.pop()
			if (pop === stack[stack.length - 1]) {
				stack.push(pop)
			} else {
				stack.pop()
			}
		}
		if (stack.length === 0) {
			isRight = true
		}
	}
	if (isRight) {
		// 3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
		return u + solution(v)
	} else {
		// 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
		// 4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
		let newString = '('
		// 4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
		// 4-3. ')'를 다시 붙입니다.
		newString += solution(v) + ')'
		// 4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
		const subU = u.substring(1, u.length - 1)
		let newU = ''
		for (const letter of subU) {
			if (letter === '(') {
				newU += ')'
			} else {
				newU += '('
			}
		}
		newString += newU
		// 4-5. 생성된 문자열을 반환합니다.
		return newString
	}
}

console.log(solution(string)) // "()(())()"가 반환 되어야 합니다!

console.log(
	'정답 = (((()))) / 현재 풀이 값 = ',
	solution(')()()()(')
)
console.log(
	'정답 = ((((()())))) / 현재 풀이 값 = ',
	solution(')()()()(())(')
)
