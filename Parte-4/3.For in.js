/*
    Estrutura de Repetição - LOOP
        - FOR IN
*/

const users = { name: 'Pedro', age: 15, street: "Rua dos bobos"}


for (const key in users) {
    console.log(`${key} : ${users[key]}`)
}