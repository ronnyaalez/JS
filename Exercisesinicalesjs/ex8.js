// Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.

function cube(b) {
    return b * b * b;
    power(b, 3);
}
console.log(cube(3)); 

function square(b) {
    const result = b * b;
    return result;
}
console.log(square(4));

function power(b, e) {
    const result = b ** e;
    return result;
}
