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
const storedTasks = JSON.parse(localStorage.getItem('storedTasks')) || [];
populateHtmlForEachTask(storedTasks);




const taskDescription = document.querySelector('#taskDescription');
const taskValidation = document.querySelector('#taskValidation');

// Add task by clicking on the return icon of the input field
taskValidation.addEventListener('click', () => {
  let addedTask = {};
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
});

// Delete task by clicking on the trash icon
const toDoListBox = document.querySelector('.to-do-list-box');
toDoListBox.addEventListener('click', (e) => {
  if(e.target && e.target.matches('p')) {
    // Store the task description paragraph class in targetClassList array with d${tasks[i].index} being targetClassList[0] 
    const targetClassList = e.target.classList;
    // Make the three dots container invisible
    document.querySelector(`div.${targetClassList[0]}`).style.visibility = 'hidden';
    // Make the trash icon visible because the visibility property is set to hidden by default in the css file
    document.getElementById(`${targetClassList[0]}`).style.visibility = 'visible';

    document.getElementById(`${targetClassList[0]}`).addEventListener('click', () => {
      // tasks.deleteTask()
      document.querySelectorAll('.task-box').forEach(e => e.remove());
      populateHtmlForEachTask(tasks.deleteTask(Number(targetClassList[0].replace('d', ''))));
    });
    // document.querySelectorAll('.task-box').forEach(e => e.remove());
    // tasks.editTask(Number(targetClassList[0].replace('d', '')));
  }
});

toDoListBox.addEventListener('input', (e) => {
  if(e.target && e.target.matches('p')) {
    // Store the task description paragraph class in targetClassList array with d${tasks[i].index} being targetClassList[0] 
    const targetClassList = e.target.classList;
    tasks.editTask(Number(targetClassList[0].replace('d', '')));
  }
});
