// 
// Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.
function tablaMultiplicar(n) {
    for (let i = 1; i <= 10; i++) {
        const m = n * i;
        console.log(`${n} x ${i} = ${m}`);
    }
}
tablaMultiplicar(5);
