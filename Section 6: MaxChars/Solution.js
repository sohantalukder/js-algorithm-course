function maxChar(str) {
    const chars = {};
    let maxNumber=null;
    for (let i of str) {
        chars[i] = chars[i] + 1 || 1;
    }
    for (let i in chars) {
        if (maxNumber === null || chars[i] > chars[maxNumber]) {
            maxNumber = i;
        }
    }
    return maxNumber;
}

console.log(maxChar('abracadabra'));