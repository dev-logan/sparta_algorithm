function is_correct_parenthesis(string) {
    const stringArray = string.split('')
    const test = []

    while(stringArray.length > 0) {
        const pop = stringArray.pop()

        if (test.slice(-1) === pop || test.length === 0) {
            test.push(pop)
        } else {
            test.pop()
        }
    }
    
    if (test.length === 0) {
        return true
    } else {
        return false
    }
}

console.log("정답 = True / 현재 풀이 값 = ", is_correct_parenthesis("(())"))
console.log("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis(")"))
console.log("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("((())))"))
console.log("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("())()"))
console.log("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("((())"))
