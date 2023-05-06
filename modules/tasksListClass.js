// import task class
// import task from './taskClass.js';
// Create and export a tasks list class which is an array of objects
export default class TasksList {
  constructor() {
    // StoredTasks array if exists in the local storage, otherwise an empty array
    this.tasks = JSON.parse(localStorage.getItem('storedTasks')) || [];
  }

    // Writing the addTask method
    addTask = (task) => {
      if (task.description !== '') {
        const newTask = {
          description: task.description,
          completed: false,
          index: this.tasks.length + 1,
        };
        this.tasks.push(newTask);
        // store the updated array of tasks in the local storage
        localStorage.setItem('storedTasks', JSON.stringify(this.tasks));
      }
      return this.tasks;
    }

    // Writing the deleteTask method
    deleteTask = (taskIndex) => {
      // At index-1 position, remove 1 element
      this.tasks.splice(taskIndex - 1, 1);
      // rearrange the tasks index
      for (let i = taskIndex - 1; i < this.tasks.length; i += 1) {
        this.tasks[i].index -= 1;
      }
      // store the updated array in the local stirage
      localStorage.setItem('storedTasks', JSON.stringify(this.tasks));
      return this.tasks;
    }

    // Writing the editTask method
    editTask = (taskIndex) => {
      let editedTask = document.querySelector(`.d${taskIndex}`).innerHTML;
      // If the task description is erased, set the description to empty task
      if (editedTask === '') {
        editedTask = 'Empty task';
      }
      if (editedTask !== '') {
        this.tasks[taskIndex - 1].description = editedTask;
        localStorage.setItem('storedTasks', JSON.stringify(this.tasks));
      }
    }
}