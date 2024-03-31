// Count Occurrences of Character
// Time Complexity - O(n)
countChar = (str, ch) => {
    let count=0
    let lowerCaseStr = str.toLowerCase()
    let lowerCaseCh = ch.toLowerCase()
    for (let i=0;i<lowerCaseStr.length;i++) {
        if (lowerCaseCh === lowerCaseStr[i]) {
            count++
        }
    }
    return count
}
console.log(countChar('mISSiSSIPpi','I'))