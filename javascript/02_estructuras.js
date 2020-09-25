let contador = 0;
const avanzar = () =>{
    numero = Math.random();
    console.log(numero);
    resultado = numero <0.25;
    return resultado;

} 
do {
    contador++;
    console.log(contador);
} while (!avanzar) {
    if (contador == 1) {
        console.log("Se avanzo :" + contador + " Vez");
    } else {

        console.log("Se avanzo :" + contador + " Veces");
    }
}   


