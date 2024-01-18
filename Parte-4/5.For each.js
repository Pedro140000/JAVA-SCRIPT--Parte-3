/*

    ForEach(item, index, array)

 */

const users = [
    { name: 'Pedro', age: 33, contact: '(19) 94343-3434' },
    { name: 'Luis', age: 23, contact: '(12) 93443-3434' },
    { name: 'João', age: 34, contact: '(13) 94556-3434' },
    { name: 'Vinicius', age: 45, contact: '(14) 97423-3434' },
]

users.forEach(function (item, index) {
    console.log(`${index + 1}) Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.contact}`)
});





// users.forEach(function (item, i, array)  {
//     console.log(i)
//     console.log(item)
//     console.log(array)
// });