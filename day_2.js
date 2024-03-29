// Hashtag Generator
// Time Complexity - o(n)
generateHash = (str) => {
    if (str.length>280 || str.trim().length ===0){
        return false
    }
    let hash = '#'
    let words = str.split(' ')
    for (i in words) {
        let capitalWord = words[i].charAt(0).toUpperCase()+ words[i].slice(1)
        hash += capitalWord
    }

    return hash
}
let hash = generateHash('I am on my way to being a great programmer.')
console.log(hash)