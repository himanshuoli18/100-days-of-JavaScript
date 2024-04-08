const restoreString = (str, indices) => {
    str = str.split('')
    let newStr = []
    for (let i=0;i<str.length;i++) {
        newStr[indices[i]] = str[i]
    }
    return newStr.join('')
}
console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))