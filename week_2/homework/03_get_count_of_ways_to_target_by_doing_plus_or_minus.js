const array = [1, 1, 1, 1, 1]
const target = 3

function plusOrMinus(array) {
    if (array.length === 1) {
        return [+array[0], -array[0]]
    }
    let [first, ...rest] = array
    let results = []
    for (let num of plusOrMinus(rest)) {
        results.push(num + first)
        results.push(num - first)
    }
    return results
}

function get_count_of_ways_to_target_by_doing_plus_or_minus(array, target) {
    return plusOrMinus(array).filter(x => x === target).length
}

console.log(get_count_of_ways_to_target_by_doing_plus_or_minus(array, target))