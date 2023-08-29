// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here


const ul = document.querySelector('ul');

function processTodo(todo)  {
  const li = document.createElement('li');
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = 'todo-' + todo.id;
  if (todo.completed) {
    input.checked = true;
  }

  const label = document.createElement('label');
  label.htmlFor = input.id;
  label.textContent = todo.task;


  li.appendChild(input);
  li.appendChild(label);

  ul.appendChild(li);

}


for (let i=0; i < todoList.length; i++) {
  processTodo(todoList[i]);
}