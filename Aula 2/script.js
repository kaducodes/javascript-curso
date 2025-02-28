function adicionarTarefa() {
    //declarada variável pegando o input lá no html
    const inputTarefa = document.getElementById("inputTarefa")
    //declara variável que pega o valor inserido no input
    const tarefa = inputTarefa.value.trim()
    //declara variável que pega a mensagem 
    const mensagem = document.getElementById("mensagem")

    if (tarefa == "") {
        let mensagemErro = "Você não adicionou nenhuma Tarefa!";
        mensagem.textContent = mensagemErro;
        mensagem.classList.remove("sucesso");
        mensagem.classList.add("erro");
    } else {
        //declara variável com um texto dentro
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        
        //muda o valor do elemento com esse id para a variável
        mensagem.textContent = mensagemSucesso;
        mensagem.classList.remove("erro");
        mensagem.classList.add("sucesso");

        //declara variável pegando a lista no html
        const listaTarefas = document.getElementById("listaTarefas")
        //declara variável criando novos elementos de lista no html
        const novaTarefa = document.createElement("li")

        //muda o texto dentro dos novos elementos de lista inserindo o valor inserido no input
        novaTarefa.textContent = tarefa

        //adiciona esse novo elemento na lista do html
        listaTarefas.appendChild(novaTarefa)
        
        //apaga o que o usuário digitou no input 
        inputTarefa.value = ""
    }
}