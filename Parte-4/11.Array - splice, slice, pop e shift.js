/*
    Array's
        - push -> Adiciona mais um item ao array
        - length -> Mostra o tamanho do array
        - sort -> Organiza o array
        - delete -> Deleta o item de uma posição do array
        - every -> Esse método testa se todos os elementos do Array passam em uma condição. Passamos uma função que retorna true ou false. Se todos os retornos forem true, significa que todos os elementos passaram no teste, e a função retornará true. Se algum item não estiver de acordo, ele retornará false.
        - some ->  O .some faz algo parecido com o .every(). A diferença é que o .every() só retorna true se todos os elementos passarem no teste. O .some() retorna true se pelo menos um elemento do Array passar no teste.
        - fill -> Preenche posições do array como desejarmos
        - find -> Usamos esse método quando queremos encontrar algum elemento dentro no Array. Para isso, passamos uma função que irá retornar true ou false. O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.
        - findIndex -> Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento.
        - concat -> Esse método é usado para juntar dois arrays. Ele não altera os arrays originais, mas cria um novo array com a soma dos dois arrays escolhidos.


        - includes -> Esse método nos diz se há ou não um determinado item no array. Retorna true ou false.
        - join -> O método join() junta todos os elementos de um array.

        - slice ->
        - splice ->
        - pop ->
        - shift ->

*/

const users = [
  { name: "João", credit: 600 },
  { name: "Maria", credit: 900 },
  { name: "Carlos", credit: 300 },
  { name: "Vanessa", credit: 300 },
];

const findAUser = users.findIndex((user) => user.name === "Maria");

users[findAUser].name = "Maria Joaquina";

console.log(users);
