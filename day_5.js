// Time Complexity : O(nlogn)
const sortAscending = (arr) => {
    return arr.sort((a,b) => a-b)
}
console.log(sortAscending([3,4,2,12]))