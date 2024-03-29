const initArr = [8, 9, 3, 2, 7, 55, 55, 1, 4, 6]

function partition (arr, low, hi) {
	const pivotPosition = Math.floor(Math.random() * arr.length),
		pivot = arr[pivotPosition]

		while (hi >= low) {
			while (arr[hi] > pivot) {
				hi--
			}
			while (arr[low] < pivot) {
				low++
			}
			if (hi >= low) {
				[arr[low], arr[hi]] = [arr[hi], arr[low]]
				hi--
				low++
			}
		}

		return low
}

function quickSort(
	arr,
	low = 0,
	hi = arr.length-1,
) {

	if (low < hi) {
		const index = partition (arr, low, hi)
		quickSort(arr, low, index-1)
		quickSort(arr, index, hi)
	}

	return arr
}

function pureQuickSort(arr) {
	let result = [...arr]
	quickSort(result)

	return result
}

const resultArr = pureQuickSort(initArr)

console.log(`Initial array = ${initArr}`)
console.log(`Result pureQuickSort array = ${resultArr}`)