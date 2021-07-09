// Criar botão que ao ser clicado, cria um item de lista para receber o texto do "input" e adiciona esta "li" na "lista ordenada", limpando o conteúdo do "input" após a execução.

const taskText = document.querySelector('#texto-tarefa');
const createTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function addTaskItem() {
  createTask.addEventListener('click', () => {
    const item = document.createElement('li');
    taskList.appendChild(item);
    item.innerText = taskText.value;
    taskText.value = '';
  });
}
addTaskItem();

// Criar função para ao clicar, percorrer por todos os itens da lista, resetando para a cor de fundo padrão (branca) e alterando a selecionada para cinza

const liItem = document.getElementsByTagName('li');

function changeBg() {
  taskList.addEventListener('click', (event) => {
    for (let i = 0; i < liItem.length; i += 1) {
      liItem[i].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
changeBg();

// https://stackoverflow.com/questions/37765638/toggle-event-listeners

function riskTask() {
  taskList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('check');
  });
}
riskTask();