const array1 = [1, 2, 3, 5]
const array2 = [4, 6, 7, 8]

function merge(array1, array2) {
    let sortedArray = []

    let index1 = 0
    let index2 = 0

    while (index1 < array1.length && index2 < array2.length) {
        if (array1[index1] < array2[index2]) {
            sortedArray.push(array1[index1])
            index1++
        } else {
            sortedArray.push(array2[index2])
            index2++
        }
    }

    if (index1 === array1.length) {
        while (index2 < array2.length) {
            sortedArray.push(array2[index2])
            index2++
        }
    }

    if (index2 === array2.length) {
        while (index1 < array1.length) {
            sortedArray.push(array1[index1])
            index1++
        }
    }

    return sortedArray
}

// console.log(merge(array1, array2))

module.exports = merge