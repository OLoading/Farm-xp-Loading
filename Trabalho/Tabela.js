const egoist = require("readline-sync").question

function menu(){
    while(1){
        console.log("--menu--")
        console.log("1 - cadastro de aluno")
        console.log("2 - listar todos os alunos")
        console.log("3 - listar aluno em específico")
        console.log("4 - atualizar aluno")
        console.log("5 - excluir aluno")
        console.log("8 - media")
        console.log("9 - main")
        console.log("0 - Sair")
        break  
    }
    
    var a = egoist("Digite uma opcao: ")
}

console.log(menu())
