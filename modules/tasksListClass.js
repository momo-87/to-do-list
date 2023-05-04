// import task class
// import task from './taskClass.js';
// Create and export a tasks list class which is an array of objects
export default class TasksList {
    constructor(){
        // StoredTasks array if exists in the local storage, otherwise an empty array
        this.tasks = JSON.parse(localStorage.getItem('storedtasks')) || [];
    }
    // writing the addTask method
    addTask = (task) => {
        if(task.description !== '') {
            const newTask = {description: task.description, completed: false, index: this.tasks.length + 1};
            this.tasks.push(newTask);
            // store the updated array of tasks in the local storage
            localStorage.setItem('storedtasks', JSON.stringify(this.tasks));
        }
        return this.tasks;
    }
}