const taskText = document.getElementById('texto-tarefa');
const createTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function addTaskItem () {
  createTask.addEventListener('click', () => {
    const item = document.createElement('li');
    item.innerText = taskText.value;
    taskText.value = '';
    taskList.appendChild(item);
  });
}
addTaskItem();