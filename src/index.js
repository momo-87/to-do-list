// import style from style.css file (required)
import './style.css';

// import the function used to populate HTML for each task
import populateHtmlForEachTask from '../modules/populateHtmlForEachTask'

// Array of tasks
const tasks = [
  // {
  //   description: 'Complete To-Do list project',
  //   completed: false,
  //   index: Date.now().toString(),
  // },
  // {
  //   description: 'Complete To-Do list structure',
  //   completed: true,
  //   index: Date.now().toString(),
  // },
  // {
  //   description: 'Complete To-Do list: add & remove',
  //   completed: false,
  //   index: Date.now().toString(),
  // },
];

// Call the populateHtmlForEachTask function to populate the HTML list item element for each task
populateHtmlForEachTask(tasks);
