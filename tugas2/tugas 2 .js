function deretkaskus(n){
 let arr = []

 let total = n * 3

 for(let i = 3 ; i <= total ; i+= 3 ){
    if (i %5 === 0 && i %6 === 0 ){
        arr.push('KASKUS')
    }else if ( i %6 === 0 ){
        arr.push( 'KUS')
    }else if( i %5 === 0){
        arr.push('KAS')
    }else (
        arr.push( i )
    )
 }
 return arr;
}

console.log(deretkaskus(10)) 