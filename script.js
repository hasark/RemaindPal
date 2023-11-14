var todos = [];

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

function OpenView() {
window.open("userpro.html", "_top");
}
function openSIndex() {
    window.open("sindex.html", "_blank");
}
}

// 

// set user's time in done page
const newTodoForm = document.querySelector('#new-todo-form');

newTodoForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = {
        content: e.target.elements.content.value,
       // category: e.target.elements.category.value,
        done: false,
        createdAt: new Date().getTime()
      }

      todos.push(todo);
    
    localStorage.setItem('todos', JSON.stringify(todos));
    
    e.target.reset();     

    window.location.href = "done.html";

  })

  function DisplayTodos() {
    const todoList = document.querySelector('#todo-list');
  
    todoList.innerHTML = "";
  
    todos.forEach(todo => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');
  
      const label = document.createElement('label');
      const input = document.createElement('input');
      const span = document.createElement('span');
      const content = document.createElement('div');
      const actions = document.createElement('div');
      const edit = document.createElement('button');
      const deleteButton = document.createElement('button');
  
  input.type = 'checkbox';
  input.checked = todo.done;
  span.classList.add('bubble');
  
  if (todo.category == 'personal') {
      span.classList.add('personal');
  }else {
    span.classList.add('business');   
  }
  
  content.classList.add('todo-content');
  actions.classList.add('actions');
  edit.classList.add('edit');
  deleteButton.classList.add('delete');
  
  content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
  edit.innerHTML = 'Edit';
  deleteButton.innerHTML = 'Delete';
  
  
  label.appendChild(input);
  label.appendChild(span);
  actions.appendChild(edit);
  actions.appendChild(deleteButton);
  todoItem.appendChild(label);
  todoItem.appendChild(content);
  todoItem.appendChild(actions);
  
  
  todoList.appendChild(todoItem);
  
  
  if(todo.done){
      todoItem.classList.add('done');
    }
      input.addEventListener('click', e => {
        todo.done = e.target.checked;
        localStorage.setItem('todos', JSON.stringify(todos));
  
        if(todo.done) {
          todoItem.classList.add('done');
        } else {
          todoItem.classList.remove('done');
        }
  
        DisplayTodos();
      })
  
      edit.addEventListener('click', e => {
        const input = content.querySelector('.bton');
        input.removeAttribute('readonly');
        input.focus();
        input.addEventListener('blur', e => {
          input.setAttribute('readonly', true);
          todo.content = e.target.value;
          localStorage.setItem('todos', JSON.stringify(todos));
          DisplayTodos();        
        }) 
      })
      deleteButton.addEventListener('click', e => {
      todos = todos.filter(t => t != todo);
      localStorage.setItem('todos', JSON.stringify(todos));
      DisplayTodos();
    })
    })
  
  }
  
// finish


// message dialog
function showConfirmation() {
  document.getElementById("confirmationDialog").classList.remove("hidden");
}

function hideConfirmation() {
  document.getElementById("confirmationDialog").classList.add("hidden");
}

function navigateToLink() {
  window.location.href = "sindex.html";
}
// finish


// uploading script
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
          $('#imagePreview').css('background-image', 'url('+e.target.result +')');
          $('#imagePreview').hide();
          $('#imagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function() {
  readURL(this);
});
// finish
