function anagrams(stringA, stringB) {
    const cleanString = (str) =>
        str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return cleanString(stringA) === cleanString(stringB);
}

console.log(anagrams('rail safety', 'fairy tales')); // false
