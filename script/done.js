loadProfile();

function loadProfile() {
    var storedImage = localStorage.getItem('userImage');
    
    var profileImage = $('#profileImage');
    if (storedImage) {
        profileImage.attr('src', storedImage);
    }
    else {
        // Set a default image if no stored image is found
        profileImage.attr('src', 'image/abstract-user-flat-4.png');
    }
}
function getCurrentDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);
    var currentDate = year + '-' + month + '-' + day;
    document.getElementById("currentDate").innerHTML = "Today: " + currentDate;
}



setInterval(getCurrentDate, 1000);
//setInterval(getCurrentTime, 1000);



function openTaskPage() {
    window.open("task.html", "_blank");
}

function openTimePage() {
    window.open("Time.html", "_blank");
}

function DisplayTodos() {
    const todoList = document.querySelector('#todo-list');
    todoList.innerHTML = "";

    var storedTodos = localStorage.getItem('todos');
    var todos = storedTodos ? JSON.parse(storedTodos) : [];

    todos.forEach(todo => {
        // Create a new <div> element for each todo with a class of 'todo-item'
        var todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        // Set the text content of the todoItem
        todoItem.textContent = `Content: ${todo.content}, Category: ${todo.category}, FromDate: ${todo.fromDate}, ToDate: ${todo.toDate}, Done: ${todo.done}`;

        // Create a delete button
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';

        // Add an event listener to delete the todo when the button is clicked
        deleteButton.addEventListener('click', () => {
            deleteTodoById(todo.id);
            DisplayTodos(); // Refresh the list after deletion
        });

        // Append the delete button to the todoItem
        todoItem.appendChild(deleteButton);

        // Append the todoItem to the todoList
        todoList.appendChild(todoItem);
    });
}
  

  // Function to delete a todo by ID from local storage
  function deleteTodoById(id) {
    var storedTodos = localStorage.getItem('todos');
    var todos = storedTodos ? JSON.parse(storedTodos) : [];

    todos = todos.filter(todo => todo.id !== id);

    localStorage.setItem('todos', JSON.stringify(todos));
}