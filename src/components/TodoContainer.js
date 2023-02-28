import React from "react";
import TodoItem from "./TodoItem";

const TodoContainer = ({ todos, setTodo, filterKeyCompleted }) => {
  return (
    <>
      <div className="todo-container">
        <p className="todo-container__header">
          {filterKeyCompleted === true ? "Completed" : "Not Completed"}
        </p>
        {filterKeyCompleted === true ? (
          <>
            {todos.filter((todo) => todo.isComplete === true).length === 0 ? (
              <p className="text-center no-todo__msg">No Todo's Completed</p>
            ) : (
              <>
                {todos
                  .filter((todo) => todo.isComplete === true)
                  .map((todoItem) => (
                    <TodoItem
                      key={todoItem.id}
                      todoItem={todoItem}
                      setTodo={setTodo}
                    />
                  ))}
              </>
            )}
          </>
        ) : (
          <>
            {todos.filter((todo) => todo.isComplete === false).length === 0 ? (
              <p className="text-center no-todo__msg">All Todo's Completed</p>
            ) : (
              <>
                {todos
                  .filter((todo) => todo.isComplete === false)
                  .map((todoItem) => (
                    <TodoItem
                      key={todoItem.id}
                      todoItem={todoItem}
                      setTodo={setTodo}
                    />
                  ))}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default TodoContainer;
