const menus = ["만두", "떡볶이", "오뎅", "사이다", "콜라"]
const orders = ["오뎅", "콜라", "만두"]

function is_available_to_order(menus, orders) {
    menus.sort()
    for (let order of orders) {
        if (!binarySearch(order, menus)) {
            return false
        }
    }
    return true
}

console.log(is_available_to_order(menus, orders))

// target이 array에 있는가?
function binarySearch(target, array) {
    if (array.length === 1) {
        if (array[0] === target) {
            return true
        } else {
            return false
        }
    }
    if (array.length === 2) {
        if (array[0] === target || array[1] === target) {
            return true
        } else {
            return false
        }
    }
    let index = Math.floor(array.length / 2)
    if (array[index] > target) {
        return binarySearch(target, array.slice(0, index))
    } else if (array[index] < target) {
        return binarySearch(target, array.slice(index + 1))
    } else {
        return true
    }
}
