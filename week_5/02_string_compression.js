const string = 'AZAAAZDWAAA'

let minimumLength = 1000
for (let i = 1; i <= string.length / 2; i++) {
	let startIdx = 0
	const cutString = []
	while (startIdx < string.length) {
		cutString.push(string.substring(startIdx, startIdx + i))
		startIdx += i
	}
    const compressArray = []
    let count = 1
	while (cutString.length) {
		const pop = cutString.pop()
		
		if (compressArray[compressArray.length - 1] === pop) {
			count++
		} else {
            if (count !== 1) {
                compressArray.push(count)
            }
            compressArray.push(pop)
			count = 1
		}
	}
    if (count !== 1) {
        compressArray.push(count)
    }
    const compressedLength = compressArray.join('').length
    if (compressedLength < minimumLength) {
        minimumLength = compressedLength
    }
}

console.log(minimumLength)