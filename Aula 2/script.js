function adicionarTarefa() {
    //declarada variável pegando o input lá no html
    let inputTarefa = document.getElementById("inputTarefa")
    //declara variável que pega o valor inserido no input
    let tarefa = inputTarefa.value 

    if (tarefa == "") {
        let mensagem = "Você não adicionou nenhuma Tarefa!";
        document.getElementById("mensagem").textContent = mensagem;
    } else {
        //declara variável com um texto dentro
        let mensagem = "Tarefa adicionada com sucesso!";

        
        //muda o valor do elemento com esse id para a variável
        document.getElementById("mensagem").textContent = mensagem;

        //declara variável pegando a lista no html
        let listaTarefas = document.getElementById("listaTarefas")
        //declara variável criando novos elementos de lista no html
        let novaTarefa = document.createElement("li")

        //muda o texto dentro dos novos elementos de lista inserindo o valor inserido no input
        novaTarefa.textContent = tarefa

        //adiciona esse novo elemento na lista do html
        listaTarefas.appendChild(novaTarefa)
        
        //apaga o que o usuário digitou no input 
        inputTarefa.value = ""
    }
}