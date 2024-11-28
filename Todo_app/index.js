"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  const createTodoItem = (taskText) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      todoText.classList.toggle("done", checkbox.checked);
    });

    const todoText = document.createElement("span");
    todoText.className = "todo-text";
    todoText.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this task?")) {
        todoList.removeChild(li);
      }
    });

    const actionsDiv = document.createElement("div");
    actionsDiv.className = "action-buttons";
    actionsDiv.appendChild(deleteButton);

    li.appendChild(checkbox);
    li.appendChild(todoText);
    li.appendChild(actionsDiv);

    return li;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const taskText = todoInput.value.trim();

    if (taskText.length === 0) {
      alert("Please enter a task.");
      return;
    }

    const todoItem = createTodoItem(taskText);
    todoList.appendChild(todoItem);

    todoInput.value = "";
    todoInput.focus();
  };

  todoForm.addEventListener("submit", handleFormSubmit);
});
