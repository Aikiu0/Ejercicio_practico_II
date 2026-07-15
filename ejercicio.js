// Referencias a los elementos del DOM
const input = document.getElementById('task-input');
const dueDateInput = document.getElementById('due-date');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const counter = document.getElementById('counter');

// Eventos para agregar tarea (click o tecla Enter)
addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

// Crea y agrega una nueva tarea a la lista
function addTask() {
  const text = input.value.trim();
  const dueDate = dueDateInput.value;

  if (text === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.classList.add('task-text');
  span.textContent = text;
  span.addEventListener('click', () => {
    span.classList.toggle('completed');
    updateCounter();
  });

  const dateSpan = document.createElement('small');
  if (dueDate) dateSpan.textContent = `Vence: ${dueDate}`;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Eliminar';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => {
    li.remove();
    updateCounter();
  });

  li.append(span, dateSpan, deleteBtn);
  taskList.appendChild(li);

  // Limpia los campos de entrada
  input.value = '';
  dueDateInput.value = '';
  input.focus();
}

// Actualiza el contador de tareas completadas
function updateCounter() {
  const completed = document.querySelectorAll('.completed').length;
  counter.textContent = `Tareas completadas: ${completed}`;
}