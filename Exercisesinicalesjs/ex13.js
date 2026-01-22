// rea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).

function reverseString(text) {
   // console.log(text.length
   //console.log(text[3])
   let result = ''

for (let i = 0; i < text.length; i++) {
    //const element = text[i];
    result = text[i] + result
    
}
return result
    
}
console.log(reverseString('casa')) // asac
