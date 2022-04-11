let a = 7;
let b = 94;

let temp = a; // é um valor temporario que não pode ser trocado mesmo com a troca dos numeros posteriormente, porém você consegue trocar os valores e colocar os tmeporarios por cima
a = b;
b = temp;

console.log(a);
console.log(b);