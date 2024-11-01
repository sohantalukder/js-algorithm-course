function reverseInt(n) {
    const reserved= n.toString().split('').reverse().join('');
    return parseInt(reserved)*Math.sign(n);
}

console.log(reverseInt(123));