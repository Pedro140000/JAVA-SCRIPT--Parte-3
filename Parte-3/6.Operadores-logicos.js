/*

Operadores logicos

&& -> E -> Pessoa Exigente
    true && true = true
    true && false = false
    false && false = false

|| -> Ou -> Tanto faz 
    true || true = true
    true || false = false
    false || false = false

!   -> Negação
    !true = false
    !false = true



*/

const digitarSenha = true
const digitarOToken = true
const numeroDaConta = true

if(digitarSenha && digitarOToken && numeroDaConta){
    console.log("Logado com sucesso")
} else {
    console.log("Autenticação falhou")
}