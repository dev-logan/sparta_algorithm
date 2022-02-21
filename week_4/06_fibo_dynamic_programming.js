function fibo_dynamic_programming(n, fibo_memo) {
    if (!fibo_memo[n]) {
        return fibo_memo[n] = fibo_dynamic_programming(n - 2, fibo_memo) + fibo_dynamic_programming(n - 1, fibo_memo)
    } else {
        return fibo_memo[n]
    }
}


const memo = {
    1: 1,
    2: 1
}
const input = 100
console.log(fibo_dynamic_programming(input, memo))

console.log(memo)