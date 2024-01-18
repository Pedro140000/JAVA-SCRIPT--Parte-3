/*
    FILTER
     - Cria um novo array, a partir do array percorrido ( array original )
     - Cria um novo array APENAS com os elementos filtrados
     - Aceite 3 parâmetros
        - item do array
        - index
        - array completo

        return true -> Item atual passa pro novo array
        return false -> Item atual NÃO passa pro novo array
*/

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];

const newList = list.filter(number => {
    if (number < 100 && number % 2 === 0) {
        return true 
    } else {
        return false
    }
})

