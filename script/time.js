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

// set user's time in done page
const newTodoForm = document.querySelector('#new-todo-form');

const storedTodos = localStorage.getItem('todos');
const todos = storedTodos ? JSON.parse(storedTodos) : [];

newTodoForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = {
        id: generateSpecialId(), // Call a function to generate a special ID
        content: e.target.elements.content.value,
        fromDate: e.target.elements.fromdate.value,
        toDate: e.target.elements.todate.value,
        category: document.getElementById('selectedLinkText').value,
        done: false,
        createdAt: new Date().getTime()
      }

      todos.push(todo);
    
    localStorage.setItem('todos', JSON.stringify(todos));
    
    e.target.reset(); 

    window.location.href = "done.html";

  })

  document.querySelectorAll('.category').forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Prevent the default behavior of the link (preventing it from navigating)
        event.preventDefault();
        
        // Get the ID and text content of the selected link
        var selectedLinkId = link.id;
        var selectedLinkText = link.textContent;

        // Set the values of hidden input fields
        document.getElementById('selectedLinkId').value = selectedLinkId;
        document.getElementById('selectedLinkText').value = selectedLinkText;

        // Change the class of all links with the class 'category' except the clicked one
        document.querySelectorAll('.category').forEach(function(otherLink) {
            if (otherLink !== link) {
                otherLink.classList.remove('selected-link');
            }
        });

        // Add a class to the clicked link
        link.classList.add('selected-link');
    });
});


// Function to generate a unique ID
function generateSpecialId() {
  return new Date().getTime();
}

