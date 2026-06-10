const input = document.querySelector(".btn-tarefa");
const novaTarefa = document.querySelector(".nova-tarefa");
const tarefa = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

input.addEventListener("keypress", function (e) {
  // keyprees é a tecla que preciona.
  console.log(e); // aqui tem como saber qual keycode foi precionado.
  if (e.keycode === 13) {
    if (!novaTarefa.value) return; // se o input nao tiver valor nenhum ele nao vai adicionar nada.
    console.log(novaTarefa.value);
  }
});

function limpaInput() {
  novaTarefa.value = "";
  novaTarefa.focus(); // focus é um evento.
}

function excluirInput(li) {
  li.innerText += " ";
  const botaoExcluir = document.createElement("button");
  botaoExcluir.innerText = 'X';
  botaoExcluir.setAttribute('class', 'apagar');
  li.appendChild(botaoExcluir);
}

function criarTarefa(textInput) {
  console.log(textInput);
  const li = criaLi(); // pegando funçao que criou o li
  li.innerText = textInput;
  tarefa.appendChild(li);
  limpaInput();
  excluirInput(li);
  salvarTarefa();
}

input.addEventListener('click', function () {
  // função anonima.
  if (!novaTarefa.value) return; // se o input nao tiver valor nenhum ele nao vai adicionar nada.

  // sempre separe tarefas por funcoes, nao coloque tudo em uma funçao somente.
  criarTarefa(novaTarefa.value);
});

document.addEventListener('click', function (e) {
  const el = e.target; // mostra onde ta clicando, no console do google

  if (el.classList.contains('apagar')) {
    el.parentElement.remove(); // o parent pega o pai do botao, que esta no li, e remove
    salvarTarefa();
  }
});

function salvarTarefa() {
    const liTarefas = tarefa.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText; // pega o valor do li
        tarefaTexto = tarefaTexto.replace('X', '').trim(); // vai subistituir o x por nada, para ter somente o valor do texto do li. E o trim retira esse vazio.
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefaJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefaJson); // como se fosse um mini banco de dados do google, e ele so guarda string.
}

function adicionarTarefaSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // volta o valor para array
    for(let tarefa of listaDeTarefas) {
        criarTarefa(tarefa);
    }
}

adicionarTarefaSalvas()