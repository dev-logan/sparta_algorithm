const merge = require('./04_merge')

const array = [5, 3, 2, 1, 6, 8, 7, 4]

function mergeSort(array) {
    if (array.length <= 1) return array
    const mid = Math.floor(array.length / 2)
    const leftArray = mergeSort(array.slice(0,mid))
    const rightArray = mergeSort(array.slice(mid))
    return merge(leftArray, rightArray)
}

console.log(mergeSort(array))  // [1, 2, 3, 4, 5, 6, 7, 8] 가 되어야 합니다!

console.log("정답 = [-7, -1, 5, 6, 9, 10, 11, 40] / 현재 풀이 값 = ", mergeSort([-7, -1, 9, 40, 5, 6, 10, 11]))
console.log("정답 = [-1, 2, 3, 5, 10, 40, 78, 100] / 현재 풀이 값 = ", mergeSort([-1, 2, 3, 5, 40, 10, 78, 100]))
console.log("정답 = [-1, -1, 0, 1, 6, 9, 10] / 현재 풀이 값 = ", mergeSort([-1, -1, 0, 1, 6, 9, 10]))