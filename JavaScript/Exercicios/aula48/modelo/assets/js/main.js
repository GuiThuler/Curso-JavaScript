const input = document.querySelector('.btn-tarefa');
const novaTarefa = document.querySelector('.nova-tarefa');
const tarefa = document.querySelector('.tarefas')

function criaLi() {
    const li = document.createElement('li')
    return li
}

input.addEventListener('keypress', function(e) { // keyprees é a tecla que preciona.
    console.log(e) // aqui tem como saber qual keycode foi precionado.
    if (e.keycode === 13) {
        if (!novaTarefa.value) return;// se o input nao tiver valor nenhum ele nao vai adicionar nada.
        console.log(novaTarefa.value);
    };
});

function criarTarefa(textInput) {
    console.log(textInput);
    const li = criaLi() // pegando funçao que criou o li
    li.innerText = textInput;
    tarefa.appendChild(li);
};

input.addEventListener('click', function(){ // função anonima.
    if (!novaTarefa.value) return;// se o input nao tiver valor nenhum ele nao vai adicionar nada.
    console.log(novaTarefa.value);

    // sempre separe tarefas por funcoes, nao coloque tudo em uma funçao somente.
    criarTarefa(novaTarefa.value);
});