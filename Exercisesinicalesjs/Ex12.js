// Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.


function esParOImpar(n){
    let result
    if(n%2==0){
        result = "par"
    }else{
        result = "impar"
    }
    return result
}

console.log(esParOImpar(4)) // par
console.log(esParOImpar(7)) // impar
