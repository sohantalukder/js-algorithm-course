function capitalize(str){
    const split=str.split(' ');
    let finalString='';
    for(let i of split){
        finalString+=i.slice(0,1).toUpperCase()+i.slice(1)+' '
    }
    return finalString.trim();
}

console.log(capitalize('a short sentence'))