const MAX_LEN = 6 

export function  genrateNumber() {
    let ans = ""
    for( let i = 0 ; i < MAX_LEN ; i++) {
        ans += Math.floor(Math.random() * 10)
    }
    return ans
}

console.log(genrateNumber())
