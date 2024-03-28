// Method 1
// Time Complexity - O(n)
function findLongestWord(str) {
    str = str.trim();
    let words_arr = str.split(' ')
    let longestWord = words_arr[0];
    for (i in words_arr) {
        if (longestWord.length<words_arr[i].length){
            longestWord = words_arr[i]
        }
    }
    return longestWord;
}

// Method 2
// Time Complexity - O(nlogn)
findLongestWord = (str) => {
    let words = str.split(' ')
    words.sort((a,b) => b.length-a.length)
    return words[0]
}

// Driver Code
let str = "My name is Himanshu Oli"
console.log(findLongestWord(str))