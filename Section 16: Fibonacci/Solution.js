// function fib(n){
//     if(n <= 0) return 0;
//     if(n === 1) return 1;
//    const b=[0, 1];
//    for(let i=2;i<=n;i++){
//        b.push(b[i-1]+b[i-2]);
//    }
//    return b[n];
// }

// recursive solution
function fib(n) {
  if(n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(10)); // 55
