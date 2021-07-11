// Facilitando encontrar as minhas const declaradas.

const taskText = document.querySelector('#texto-tarefa');
const createTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const liItem = document.getElementsByTagName('li');
const clearAllButton = document.querySelector('#apaga-tudo');
const rmvDoneButton = document.querySelector('#remover-finalizados');
const saveTasks = document.querySelector('#salvar-tarefas');
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');
const rmvSelected = document.querySelector('#remover-selecionado');

// Função para ao clicar, cria uma "li" para receber o texto do "input" e a adiciona na "lista ordenada", limpando o conteúdo do "input" após a execução.

createTask.addEventListener('click', () => {
  const item = document.createElement('li');
  taskList.appendChild(item);
  item.innerText = taskText.value;
  taskText.value = '';
});

// Função para ao clicar, percorrer por todos os itens da lista, resetando para a cor de fundo padrão (branca) e altera a selecionada para cinza.
// https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList

taskList.addEventListener('click', (event) => {
  for (let i = 0; i < liItem.length; i += 1) {
    liItem[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
});

// https://stackoverflow.com/questions/37765638/toggle-event-listeners
// Função para riscar e remover o "risco" do elemento selecionado por um doubleclick.

taskList.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});

// Função ao clicar no botão Apaga tudo, limpa todo o conteúdo da lista.

clearAllButton.addEventListener('click', () => {
  taskList.innerHTML = '';
});

// Função ao clicar no botão Remover finalizados, percorre todos os itens com a classe .complete e remove estes itens da lista.

rmvDoneButton.addEventListener('click', () => {
  const doneList = document.querySelectorAll('.completed');
  for (let i = 0; i < doneList.length; i += 1) {
    doneList[i].remove();
  }
});

// Função ao clicar no botão Salvar tarefas, salva os itens no localStorage, pois devem permanecer na lista ao recarregar a página.
// Define os itens da lista (li) como parâmetros a serem salvos e os retorna quando a página é atualizada.
// https://stackoverflow.com/questions/44564795/how-to-keep-localstorage-values-after-refresh

saveTasks.addEventListener('click', () => {
  localStorage.setItem('item', taskList.innerHTML);
});
taskList.innerHTML = localStorage.getItem('item');

// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
// Função ao clicar no botão Mover para cima, executa o respectivo comando.

moveUpButton.addEventListener('click', () => {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected !== null && taskSelected.previousElementSibling !== null) {
    taskList.insertBefore(taskSelected, taskSelected.previousElementSibling);
  }
});

// Função ao clicar no botão Mover para baixo, executa o respectivo comando.

moveDownButton.addEventListener('click', () => {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected !== null && taskSelected.nextElementSibling !== null) {
    taskList.insertBefore(taskSelected.nextElementSibling, taskSelected);
  }
});

// Função ao clicar no botão "Remover finalizados" remover item selecionado.
// https://dzone.com/articles/remove-option-elements-select

rmvSelected.addEventListener('click', () => {
  const selectedItemRmv = document.getElementsByClassName('selected');
  for (let i = 0; selectedItemRmv.length; i += 1) {
    if (selectedItemRmv[i].classList.contains('selected')) {
      taskList.removeChild(selectedItemRmv[i]);
    }
  }
});
