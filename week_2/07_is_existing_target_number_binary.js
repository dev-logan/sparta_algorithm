const target = 2
const array = [0, 3, 5, 6, 1, 2, 4]

function is_existing_target_number_binary(target, array) {
    array = array.sort((a,b) => a-b)
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