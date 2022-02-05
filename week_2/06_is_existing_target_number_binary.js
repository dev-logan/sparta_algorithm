const target = 13;
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function is_existing_target_number_binary(target, array) {
  while (array.length > 1) {
    let index = Math.floor(array.length / 2);
    if (array[index] > target) {
      array = array.slice(0, index);
    } else if (array[index] < target) {
      array = array.slice(index + 1);
    } else {
      return true;
    }
  }
  if (array[0] === target) {
    return true;
  } else {
    return false;
  }
}

console.log(is_existing_target_number_binary(target, array))