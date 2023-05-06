// import style from style.css file (required)
import './style.css';

// import the function used to populate HTML for each task
import populateHtmlForEachTask from '../modules/populateHtmlForEachTask.js';

// Import the tasksList Class
import TasksList from '../modules/tasksListClass.js';

const tasks = new TasksList();

/* Call the populateHtmlForEachTask function to populate
the HTML list item element for each task in the local storage */
const storedTasks = JSON.parse(localStorage.getItem('storedTasks')) || [];
populateHtmlForEachTask(storedTasks);

const taskDescription = document.querySelector('#taskDescription');
const taskValidation = document.querySelector('#taskValidation');

// Add task by clicking on the return icon of the input field
taskValidation.addEventListener('click', () => {
  let addedTask = {};
  if (taskDescription.value === '') {
    document.querySelector('.error-message').textContent = "Please, the task's description is required";
  }
  if (taskDescription.value !== '') {
    // Remove the error message when a task is validated
    document.querySelector('.error-message').textContent = '';
    addedTask = { description: taskDescription.value };
    // Remove previous task-box from the DOM
    document.querySelectorAll('.task-box').forEach((e) => e.remove());
    populateHtmlForEachTask(tasks.addTask(addedTask));
  }
  taskDescription.value = '';
});

// Delete task by clicking on the trash icon
const toDoListBox = document.querySelector('.to-do-list-box');
toDoListBox.addEventListener('click', (e) => {
  if (e.target && e.target.matches('i.trash')) {
    const index = Number(e.target.id.replace('d', ''));
    document.querySelectorAll('.task-box').forEach((e) => e.remove());
    populateHtmlForEachTask(tasks.deleteTask(index));
  }

  // Focus on description paragraph by clicking on edit button
  if (e.target && e.target.matches('i.edit')) {
    const targetClassList = e.target.classList;
    document.querySelector(`p.${targetClassList[0]}`).focus();
  }

  // Change the task status by clicking on the check box
  if (e.target && e.target.matches('input.check-box')) {
    const targetClassList = e.target.classList;
    tasks.changeTaskStatus(Number(targetClassList[0].replace('checkBox', '')));
  }
});

// Edit task by change the innerHTML
toDoListBox.addEventListener('input', (e) => {
  if (e.target && e.target.matches('p')) {
    /* Store the task description paragraph class in targetClassList
    array with d${tasks[i].index} being targetClassList[0] */
    const targetClassList = e.target.classList;
    tasks.editTask(Number(targetClassList[0].replace('d', '')));
  }
});

document.querySelector('.clear-all-completed').addEventListener('click', () => {
  tasks.clearAllCompleted();
  document.querySelectorAll('.task-box').forEach((e) => e.remove());
  populateHtmlForEachTask(tasks.clearAllCompleted());
});