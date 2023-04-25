const input = document.getElementById('task');
const btn = document.getElementById('add');
const list = document.querySelector('.tasks');


// Load tasks from local storage, or set an empty array if there are no tasks.
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Define a function that will display the tasks on the page.
function displayTasks() {
    
  list.innerHTML = '';
//   Loop through the array of tasks and create a new div element for each task.
  for (let i = 0; i < tasks.length; i++) {

    // Create a new div element to hold the task and delete button.
    const newEntry = document.createElement('div');
    // Add a CSS class to the new div element.
    newEntry.classList.add('task');
    // Set the text content of the new div element to the task text.
    newEntry.textContent = tasks[i];

    // Create a new button element for deleting the task as well as css class to style the button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('content');
    deleteBtn.textContent = 'Delete';


    // Add a click event listener to the delete button element. Remove the task at index i from the tasks array.Save the updated tasks array to local storage.
    deleteBtn.addEventListener('click', () => {
      tasks.splice(i, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayTasks();
    });
    newEntry.appendChild(deleteBtn);
    list.appendChild(newEntry);
  }
}

// Add new task to the list
btn.addEventListener('click', () => {
  if (input.value !== ''&&tasks.length<5) {
    tasks.push(input.value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
    input.value = '';
  }
});

// Display initial tasks
displayTasks();



   