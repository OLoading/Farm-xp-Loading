function obteropcao (){
            return paerseInt(prompt("Digite o numero da opcao desejada: "))
        }
    
    function executaropcao(opcao){
        switch (opcao) {
            case 1:
                console.log("Você escolheu a Opção 1.")
                break
            
            case 2:
                console.log("Você escolheu a Opção 2.")
                break
                
            case 3:
                console.log("Você escolheu a Poção 3.")
                break
            
            case 4:
                console.log("Você escolheu a Opção 4.")
                break
    
            case 5:
                console.log("Você escolheu a Opção 5.")
                break
    
            case 6:
                console.log("Você escolheu a Opção 6.")
                break
    
            case 7:
                console.log("Você escolheu a Opção 6.")
                break
    
            case 8:
                console.log("Você escolheu a Opção 7.")
                break
    
            case 9:
                console.log("Você escolheu a Opção 8.")
                break
            
            default:
                console.log("Concluido.")
            }
    }
    
    function main(){
        let opcao
    
    do {
        exibirMenu()
        opcao = obteropcao()
        executaropcao(opcao)
     } while (opcao !== 4)
    }

main()

