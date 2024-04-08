// Ques 1
const findMax = (arr) => {
    let maxNum = arr[0]
    for (let i=0;i<arr.length;i++) {
        if (maxNum < arr[i]) {
            maxNum = arr[i]
        }
    }
    return maxNum
}
const arr = [1,4,2,-3,-4]
console.log(findMax(arr))

// Ques 2
mergeAlternately = (word1, word2) => {
    let arr1 = word1.split('')
    let arr2 = word2.split('')
    let bigArr;
    arr1.length > arr2.length ? bigArr = arr1.length : bigArr = arr2.length
    let newWord ='';
    for (let i=0;i<bigArr;i++){
        if (arr1[i]!=undefined) newWord += arr1[i]
        if (arr2[i]!=undefined) newWord += arr2[i]
    }
    return newWord
};
console.log(mergeAlternately('Himanshu','Mansi'))

// Ques 3
const merge = (intervals) => {
    console.log(intervals)
    console.log(intervals.sort((a, b) => a[0] - b[0]))
}
merge([[8,10],[1,3],[2,6],[15,18]])