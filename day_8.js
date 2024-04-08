strStr = (haystack, needle) => {
    haystack = haystack.split('')
    needle = needle.split('')
    let extraStr
    for (i in haystack) {
        if (haystack[i] = needle[i]) continue
        extraStr = needle[i]
    }
    console.log(extraStr)
    // extraStr = extraStr.toString()
    return extraStr
}
console.log(strStr('abcd','abcde'))