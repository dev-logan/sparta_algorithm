function fibo_recursion(n) {
    if (n === 1 || n === 2) return 1
    return fibo_recursion(n - 2) + fibo_recursion(n - 1)
}

const input = 20
console.log(fibo_recursion(input))  // 6765