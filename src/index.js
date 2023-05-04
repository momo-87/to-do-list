// import style from style.css file (required)
import './style.css';

// import the function used to populate HTML for each task
import populateHtmlForEachTask from '../modules/populateHtmlForEachTask'

// Array of tasks
// const tasks = [
//   {
//     description: 'Complete To-Do list project',
//     completed: false,
//     index: Date.now().toString(),
//   },
//   {
//     description: 'Complete To-Do list structure',
//     completed: true,
//     index: Date.now().toString(),
//   },
//   {
//     description: 'Complete To-Do list: add & remove',
//     completed: false,
//     index: Date.now().toString(),
//   },
// ];

// Import the tasksList Class
import TasksList from '../modules/tasksListClass.js';
const tasks = new TasksList();

// Call the populateHtmlForEachTask function to populate the HTML list item element for each task in the local storage
const storedTasks = JSON.parse(localStorage.getItem('storedtasks')) || [];
populateHtmlForEachTask(storedTasks);




const taskDescription = document.querySelector('#taskDescription');
const taskValidation = document.querySelector('#taskValidation');
taskValidation.addEventListener('click', () => {
  let addedTask = {};
  // let tasksList = [];
  if(taskDescription.value === '') {
    document.querySelector('.error-message').textContent = "Please, the task's description is required";
  }
  if(taskDescription.value !== '') {
    // Remove the error message when a task is validated
    document.querySelector('.error-message').textContent = "";
    addedTask = {description: taskDescription.value};
    // Remove previous task-box from the DOM
    document.querySelectorAll('.task-box').forEach(e => e.remove());
    populateHtmlForEachTask(tasks.addTask(addedTask));
  }
  taskDescription.value ='';
})
