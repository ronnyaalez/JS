//  Crea una función que imprima por consola un número al azar entre 0 y 10
function randomNumber(){
    return Math.floor(Math.random() * 11);
}
console.log(randomNumber())

for (let i = 0; i <= 10; i++) {
    console.log(i,randomNumber())
    
}
