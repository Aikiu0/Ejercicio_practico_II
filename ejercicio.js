const dueDateInput = document.getElementById('due-date');

function addTask() {
  const text = input.value.trim();
  const dueDate = dueDateInput.value;
  if (text === '') return;

  const li = document.createElement('li');
  li.innerHTML = `<span>${text}</span> ${dueDate ? `<small>Vence: ${dueDate}</small>` : ''}`;
  taskList.appendChild(li);

  input.value = '';
  dueDateInput.value = '';
}

const counter = document.getElementById('counter');

function updateCounter() {
  const completed = document.querySelectorAll('.completed').length;
  counter.textContent = `Tareas completadas: ${completed}`;
}

// dentro del listener de span (marcar completada), llamar:
span.addEventListener('click', () => {
  span.classList.toggle('completed');
  updateCounter();
});

// y dentro de deleteBtn también:
deleteBtn.addEventListener('click', () => {
  li.remove();
  updateCounter();
});