import { nanoid } from "nanoid";
import { renderTask } from "./render-tasks";

export function onHeaderFormSubmit(e) {
    e.preventDefault();
    const { taskName, taskDescription } = e.target.elements;
    
    if (taskName.value.trim() === '' || taskDescription.value.trim() === '') {
        alert('Заповніть всі поля форми');
        return
    }
    const tasks = {
        name: taskName.value.trim(),
        description: taskDescription.value.trim(),
        id: nanoid(),
        }
    renderTask(tasks);

    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.push(tasks);
    localStorage.setItem('tasks', JSON.stringify(savedTasks));

    e.target.reset();
    
}

export function onDeleteTask(e) {
    if (!e.target.classList.contains('task-list-item-btn')) {
        return;
    }
   
    const taskItem = e.target.closest('.task-list-item');
    taskItem.remove();
}

export function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
        renderTask(task);
    });
}

export function initTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(savedTheme);
    }
}

export function onThemeToggle() {
    const newTheme = document.body.classList.contains('theme-dark')
    ? 'theme-light'
        : 'theme-dark';
    
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
}