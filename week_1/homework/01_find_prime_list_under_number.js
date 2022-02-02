const n = 20

// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// const primes = [2]
// for (let i = 3; i <= input; i++) {
//     if (isPrime(i)) {
//         primes.push(i)
//     }
// }

// console.log(primes)

let primes = []
let notPrime = false
for (let i = 2; i <= n; i++) {
    for (let j of primes) {
        if (j > Math.sqrt(i)) break
        if (i % j === 0) {
            notPrime = true
            break
        }
    }
    if (notPrime) {
        notPrime = false
        continue
    }
    primes.push(i)
}
console.log(primes)