//cria um array vazio fora das funções pois as 2 irão usar
let tarefas = []

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

        //adiciona o item na lista
        tarefas.push(tarefa)

        renderizarTarefas()
        
        //limpa o que o usuário digitou no input 
        inputTarefa.value = ""
    }
}

function renderizarTarefas() {
    //declara variável pegando a lista no html
    const listaTarefas = document.getElementById("listaTarefas")
    //apaga no html todas os li que tínhamos mostrado e mostramos a lista de li toda percorrida e atualizada a cada input
    listaTarefas.innerHTML = ""

    //faz um loop percorrendo a lista inteira e adicionando cada item na lista
    //1. item inicial (iterador)
    //2. item final (condição)
    //3. se vai em 1 em 1, 2 em 2... (frequência)
    // for (iterador, condição, frequência)
    //cria variável do iterador com 0 que é o primeiro elemento da lista
    let i = 0
    for (i; i < tarefas.length; i++){
        //declara variável criando novos elementos de lista no html
        let novaTarefa = document.createElement("li")
        //insere o valor inserido no input na lista e o texto contido no li
        novaTarefa.textContent = tarefas[i]
        //adiciona esse novo elemento na lista do html
        listaTarefas.appendChild(novaTarefa)
    }   
}