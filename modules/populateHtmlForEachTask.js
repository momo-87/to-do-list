// A function to iterate over the tasks array and populate an HTML list item element for each task
const populateHtmlForEachTask = (tasks) => {
  const toDoListBox = document.querySelector('.to-do-list-box');
  const taskBox = [];
  for (let i = 0; i < tasks.length; i += 1) {
    taskBox[i] = document.createElement('div');
    taskBox[i].classList.add('flex-row', 'task-box');
    taskBox[i].contentEditable = true;
    for (let j = i; j < tasks.length; j += 1) {
      if (tasks[j].index < tasks[i].index) {
        // variables swapped in one destructuring assignment
        [tasks[i], tasks[j]] = [tasks[j], tasks[i]];
      }
    }
    if(tasks[i].description !== '') {
        taskBox[i].innerHTML = `<div class = "checkBox-and-description-box flex-row">
                                  <input class = "check-box" type = "checkBox">
                                  <p class = "task-description">${tasks[i].description}</p>
                                </div>
                                <div class = "dots-box flex-column"><span class = "dot"></span><span class = "dot"></span><span class = "dot"></span></div>
                                `;
      toDoListBox.appendChild(taskBox[i]);
    }
  }
};
export default populateHtmlForEachTask;
