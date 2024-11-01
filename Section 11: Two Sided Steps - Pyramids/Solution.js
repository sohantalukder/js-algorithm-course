function pyramid(n) {
for (let i = 0; i < n; i++) {
    let level='';
    for (let j = 0; j < 2*n-1; j++) {
        const midPoint = Math.floor((2*n-1)/2);
        if(midPoint-i<=j && j<=midPoint+i) {
            level+='#'
        }else{
            level+=' '
        }
    }
    console.log(`"${level}"`);
}
}
pyramid(3);
