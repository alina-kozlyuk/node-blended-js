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

    e.target.reset();
    
}