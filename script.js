const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', addTask);

function addTask(event) {
  event.preventDefault();

  const taskName = document.querySelector('#task-name').value;
  const dueDate = document.querySelector('#due-date').value;
  const priority = document.querySelector('#priority').value;

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span>${taskName}</span>
    <span>${dueDate}</span>
    <span>${priority}</span>
    <button>Delete</button>
  `;

  taskList.appendChild(taskItem);

  form.reset();

  const deleteButton = taskItem.querySelector('button');
  deleteButton.addEventListener('click', deleteTask);
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskList.removeChild(taskItem);
}
