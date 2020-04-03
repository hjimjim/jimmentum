const todoContainer = document.querySelector(".js-todo-container"),
  todoForm = todoContainer.querySelector(".js-todo-form"),
  todoInput = todoContainer.querySelector("input"),
  todoList = todoContainer.querySelector("ul");

const USER_LS = "currentUser";
const INVISIBLE_CN = "invisible";
const TODOS_LS = "toDos";
let toDos = [];

function handleDelete() {
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);
  console.log(li.id);
  const refreshToDO = toDos.filter(function(todo) {
    return todo.ID !== parseInt(li.id);
  });
  toDos = refreshToDO;
  saveToDo();
}

function saveToDo() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function printToDo(text) {
  const delBtn = document.createElement("button");
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = text;
  delBtn.innerText = "❌";
  const newID = toDos.length + 1;
  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);
  todoObj = {
    todo: text,
    ID: newID
  };
  li.id = newID;
  toDos.push(todoObj);
  saveToDo();
  delBtn.addEventListener("click", handleDelete);
}

function handleToDoSummit() {
  event.preventDefault();
  const todo = todoInput.value;
  printToDo(todo);
  todoInput.value = "";
}

function showToDo() {
  todoForm.classList.remove(INVISIBLE_CN);
  todoForm.classList.add(VISIBLE_CN);
  todoForm.addEventListener("submit", handleToDoSummit);
}

function loadToDo() {
  const user = localStorage.getItem(USER_LS);
  const load = localStorage.getItem(TODOS_LS);

  if (user !== null) {
    showToDo();
    if (load !== null) {
      const parsedTODO = JSON.parse(load);
      parsedTODO.forEach(function(todo) {
        printToDo(todo.todo);
      });
    }
  }
}
function init() {
  loadToDo();
}

init();
