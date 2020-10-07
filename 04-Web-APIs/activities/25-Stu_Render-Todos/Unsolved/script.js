var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

for (i = 0; i < todos.length; i++) {


    var newTodo = document.createElement("li");
    newTodo.textContent = todos[i];
    todoList.append(newTodo);
}

todoCountSpan.textContent = todos.length;

var todoText = todoInput.value.trim();

todoForm.document.addEventListener("submit", function(event) {
    event.preventDefault();
    var todoText = todoInput.value.trim();
    if (todoText === "") {
        return;
    }

    todoList.push(todoText)
})