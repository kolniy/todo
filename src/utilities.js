import { v4 as uuidv4 } from "uuid";

let todoList = [];

export const loadTodos = () => {
  const todosList =
    localStorage.getItem("todos") !== null
      ? localStorage.getItem("todos")
      : "[]";
  return JSON.parse(todosList);
};

export const addTodo = (todoText) => {
  const todoItem = {
    id: uuidv4(),
    text: todoText,
    isComplete: false,
  };
  todoList = loadTodos();
  todoList.push(todoItem);
  localStorage.setItem("todos", JSON.stringify(todoList));
  return todoList;
};

export const toggleTodoAsComplete = (id) => {
  todoList = loadTodos();
  todoList = todoList.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        isComplete: !todo.isComplete,
      };
    } else {
      return todo;
    }
  });
  localStorage.setItem("todos", JSON.stringify(todoList));
  return todoList;
};

export const updateTodoText = (text, id) => {
  todoList = loadTodos();
  todoList = todoList.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        text: text,
      };
    } else {
      return todo;
    }
  });
  localStorage.setItem("todos", JSON.stringify(todoList));
  return todoList;
};

export const removeTodo = (id) => {
  todoList = loadTodos();
  todoList = todoList.filter((todoItem) => todoItem.id !== id);
  localStorage.setItem("todos", JSON.stringify(todoList));
  return todoList;
};
