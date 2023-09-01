// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: false,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: false,
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

// Variable to keep track of the next unique ID
let nextTodoId = todoList.length + 1;

// Function to render the todo list
function renderTodoList() {
  const todoItems = todoList.map(function(todo) {
    return `
      <li id="li-${todo.id}">
        <input type="checkbox" id="todo-${todo.id}" ${todo.completed ? 'checked' : ''}>
        <label for="todo-${todo.id}">${todo.task}</label>
        <button id="button${todo.id}">delete</button>
      </li>
    `;
  }).join('');
  ul.innerHTML = todoItems;
}

// Initial rendering of the todo list
const ul = document.querySelector('ul');
renderTodoList();

// Event delegation for marking tasks as completed and deleting tasks
ul.addEventListener('click', function(event) {
  // Checkbox event
  if (event.target.tagName === 'INPUT' && event.target.id.startsWith('todo-')) {
    const id = parseInt(event.target.id.replace('todo-', ''), 10);
    const todo = todoList.find(function(item) {
      return item.id === id;
    });
    if (todo) {
      todo.completed = event.target.checked;
      console.log(todoList);
    }
  }
  // Delete button event
  else if (event.target.tagName === 'BUTTON' && event.target.id.startsWith('button')) {
    const id = parseInt(event.target.id.replace('button', ''), 10);
    const index = todoList.findIndex(function(item) {
      return item.id === id;
    });
    if (index !== -1) {
      todoList.splice(index, 1);
      renderTodoList(); // Update the UI after deletion
      console.log(todoList);
    }
  }
});

// Modal and "Add Todo Item" button logic
const modal = document.querySelector('dialog');
const addButton = document.querySelector('.add-btn');
const form = modal.querySelector('form');
const input = form.querySelector('input');

addButton.addEventListener('click', function() {
  modal.showModal();
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const taskName = input.value.trim();
  if (taskName) {
    const newTodo = {
      id: nextTodoId++,
      task: taskName,
      completed: false
    };
    todoList.push(newTodo);
    renderTodoList(); // Update the UI with the new item
    modal.close();
    input.value = '';
    console.log(todoList);
  } else {
    alert('Please enter a valid todo item.');
  }
});
