const string = 'tomato'

function is_palindrome(string) {
    if (string.length <= 1) {
        return true
    }
    if (string[0] !== string[string.length - 1]) {
        return false
    }
    if (is_palindrome(string.substring(1,string.length-1))) {
        return true
    }
}

console.log(is_palindrome(string))