// Facilitando encontrar as minhas const declaradas.

const taskText = document.querySelector('#texto-tarefa');
const createTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const liItem = document.getElementsByTagName('li');
const clearAllButton = document.querySelector('#apaga-tudo');
const rmvDoneButton = document.querySelector('#remover-finalizados');
const saveTasks = document.querySelector('#salvar-tarefas');
const moveUpButton = document.querySelector('#mover-cima');

// Criar botão que ao ser clicado, cria um item de lista para receber o texto do "input" e adiciona esta "li" na "lista ordenada", limpando o conteúdo do "input" após a execução.

function addTaskItem() {
  createTask.addEventListener('click', () => {
    const item = document.createElement('li');
    taskList.appendChild(item);
    item.innerText = taskText.value;
    taskText.value = '';
  });
}
addTaskItem();

// Criar função para ao clicar, percorrer por todos os itens da lista, resetando para a cor de fundo padrão (branca) e altera a selecionada para cinza.

function changeBg() {
  taskList.addEventListener('click', (event) => {
    for (let i = 0; i < liItem.length; i += 1) {
      liItem[i].classList.remove('selecionado');
    }
    event.target.classList.add('selecionado');
  });
}
changeBg();

// https://stackoverflow.com/questions/37765638/toggle-event-listeners
// Função para riscar e remover o "risco" do elemento selecionado por um doubleclick.

function riskTask() {
  taskList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}
riskTask();

// Função ao clicar no botão Apaga tudo, limpa todo o conteúdo da lista.

function clearAll() {
  clearAllButton.addEventListener('click', () => {
    taskList.innerHTML = '';
  });
}
clearAll();

// Função ao clicar no botão Remover finalizados, percorre todos os itens com a classe .complete e remove estes itens da lista.

function rmvDone () {
  rmvDoneButton.addEventListener('click', () => {
    const doneList = document.querySelectorAll('.completed');
    for (let i = 0; i < doneList.length; i += 1) {
      doneList[i].remove();
    }
  });
}
rmvDone();

// Função ao clicar no botão Salvar tarefas, salva os itens no localStorage, pois devem permanecer na lista ao recarregar a página.
// Define os itens da lista (li) como parâmetros a serem salvos e os retorna quando a página é atualizada.
// https://stackoverflow.com/questions/44564795/how-to-keep-localstorage-values-after-refresh

function saveTaskButton () {
  saveTasks.addEventListener('click', () => {
  localStorage.setItem('item', taskList.innerHTML);
  });
  taskList.innerHTML = localStorage.getItem('item');
}
saveTaskButton();

