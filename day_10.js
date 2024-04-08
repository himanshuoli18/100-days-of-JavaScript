// Ques 1
const arraysAreEqual = (arr1, arr2) => {
    // console.log()
    if (arr1.length != arr2.length) return false
    for (let i =0; i<arr1.length; i++) {
        if (arr1[i] != arr2[i]) return false
    }
    return true
}
console.log(arraysAreEqual([1,2,3],[1,2,3]))



// Ques 2
const peakElement = (arr) => {
    if (arr.length<3) return 'Less elements\nMinimum array length : 3'
    for(let i=1;i<arr.length-1;i++) {
        if (arr[i-1] < arr[i] && arr[i]> arr[i+1]) return `Index of a peak point is ${i}`
    }
    return 'No peak element found'
}
console.log(peakElement([1,2,3]))



// Ques 3
const kthSmallest = (arr,k) => {
    arr = arr.sort()
    return arr[k-1]
}
console.log(kthSmallest([1,4,2,6,3,8,3],5))