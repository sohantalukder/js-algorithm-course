function vowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result =0;
    for (let i=0; i<str.length; i++) {
        if(vowels.includes(str[i])){
            result++;
        }
    }
    return result;
}

console.log(vowels('Hi There!'));
