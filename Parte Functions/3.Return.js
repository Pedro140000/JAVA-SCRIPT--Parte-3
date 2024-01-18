/*  Functions / Funções

    Função void (vazia), não retorna nada.
    Função return, retorna um valor para quem chamou a função.
*/

// function sum(value, value2) {
//     console.log(value + value2)
// }

// function sum() { //void
//     return "Olá, sou educado"
// }

// console.log(sum())

/*
    Calcula Desconto:
    Todos os produtos acima de R$ 30,00 tem desconto de 10% 
*/

// const cart = [10, 244, 99, 2, 20, 33, 250];
// let finalValue = 0;

// function calculateDiscount(price, discount) {
//   const result = (price * discount) / 100;
//   return result;
// }

// cart.forEach((value) => {
//   if (value > 30) {
//     const discount = calculateDiscount(value, 10);
//     finalValue += (value - discount); // Adicione o valor com desconto
//   } else {
//     finalValue += value; // Adicione o valor sem desconto
//   }
// });

// console.log(finalValue);


const cart = [10, 244, 99, 2, 20, 33, 250];
let totalSemDesconto = 0;
let totalComDesconto = 0;

function calculateDiscount(price, discount) {
  const result = (10 * discount) / 100;
  return result;
}

cart.forEach((value) => {
  if (value > 30) {
    const discount = calculateDiscount(value, 10);
    totalSemDesconto += value;
    totalComDesconto += (value - discount);
  } else {
    totalSemDesconto += value;
    totalComDesconto += value;
  }
});

const economia = totalSemDesconto - totalComDesconto;

console.log(`Valor total sem desconto: ${totalSemDesconto}`);
console.log(`Valor total com desconto: ${totalComDesconto}`);
console.log(`Economia: ${economia}`);

// PRATICAR AMANHÃ O CODIGO ACIMA (DIGITANDO E COMPREENDENDO O QUE CADA COISA FAZ!!)