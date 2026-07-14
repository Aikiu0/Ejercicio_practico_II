function addTask() {
  const text = input.value.trim();
  const dueDate = dueDateInput.value;
  if (text === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = text;
  span.addEventListener('click', () => {
    span.classList.toggle('completed');
  });

  const dateSpan = document.createElement('small');
  if (dueDate) dateSpan.textContent = ` Vence: ${dueDate}`;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Eliminar';
  deleteBtn.addEventListener('click', () => li.remove());

  li.append(span, dateSpan, deleteBtn);
  taskList.appendChild(li);

  input.value = '';
  dueDateInput.value = '';
}
