import { refs } from "./refs";

export function renderTask(task) {
    const markup = `<li class="task-list-item">
      <button type="button" class="task-list-item-btn">Delete</button>
      <h3>${task.name}</h3>
      <p>${task.description}</p>
  </li>`;
   
    refs.taskList.insertAdjacentHTML('beforeend', markup);
}

