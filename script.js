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
const selecionado = document.querySelector('.selected');
const completed = document.querySelector('.completed');
const rmvSelected = document.querySelector('#remover-selecionado');

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
// https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList

function changeBg() {
  taskList.addEventListener('click', (event) => {
    for (let i = 0; i < liItem.length; i += 1) {
      liItem[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
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

function rmvDone() {
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

function saveTaskButton() {
  saveTasks.addEventListener('click', () => {
    localStorage.setItem('item', taskList.innerHTML);
  });
  taskList.innerHTML = localStorage.getItem('item');
}
saveTaskButton();

// https://stackoverflow.com/questions/1363650/javascript-moving-element-in-the-dom
// Função ao clicar no botão Mover para cima, executa o respectivo comando.

function moveUp() {
  moveUpButton.addEventListener('click', () => {
    for (let i = 0; i < liItem.length; i += 1) {
      if (liItem[i].className === 'selecionado' && i !== 0) {
        liItem[i].parentNode.insertBefore(liItem[i], liItem[i].previousElementSibling);
        liItem[i].parentNode.insertBefore(liItem[i], liItem[i].nextElementSibling);
      }
    }
  });
}
moveUp();

// Função ao clicar no botão Mover para baixo, executa o respectivo comando.

function moveDown() {
  moveDownButton.addEventListener('click', () => {
    for (let i = 0; i < liItem.length; i += 1) {
      if (liItem[i].className === 'selecionado' && i !== liItem.length - 1) {
        liItem[i].parentNode.insertBefore(liItem[i].nextElementSibling, liItem[i]);
        liItem[i].parentNode.insertBefore(liItem[i].previousElementSibling, liItem[i]);
      }
    }
  });
}
moveDown();

// Função ao clicar no botão "Remover finalizados" remover item selecionado.
// https://dzone.com/articles/remove-option-elements-select

function removeSelectedItem() {
  rmvSelected.addEventListener('click', () => {
    const selectedItemRmv = document.getElementsByClassName('selected');
    for (let i = 0; selectedItemRmv.length; i += 1) {
      if (selectedItemRmv[i].classList.contains('selected')) {
        taskList.removeChild(selectedItemRmv[i]);
      }
    }
  });
}
removeSelectedItem();
