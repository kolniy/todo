import { useState, useEffect } from "react";
import { Container, Input, FormGroup, Button, InputGroup } from "reactstrap";
import { loadTodos, addTodo } from "./utilities";
import TodoContainer from "./components/TodoContainer";
import "./App.css";
import "./styles/argon-design-system-react.css";

function App() {
  const [todos, setTodo] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleAddTodoBtnClick = () => {
    setTodo(addTodo(todoText));
    setTodoText("");
  };

  useEffect(() => {
    setTodo(loadTodos());
  }, []);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("todos")));
  }, [todos]);

  return (
    <>
      <div className="app-wrapper">
        <div className="app-header-container">
          <Container>
            <h1>Todo App</h1>
            <p>Manage your work flows seamlessly</p>
          </Container>
        </div>
        <div className="app-body-container">
          <Container>
            <div className="header-action__container">
              <FormGroup className="header-action-form__group">
                <InputGroup>
                  <Input
                    aria-label="todo text"
                    placeholder="Todo Text e.g 'go to the mall'"
                    type="text"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                  ></Input>
                  <div addonType="append">
                    <Button
                      onClick={handleAddTodoBtnClick}
                      className="add-todo__btn"
                      type="button"
                    >
                      Add Todo
                    </Button>
                  </div>
                </InputGroup>
              </FormGroup>
            </div>
            <div className="todo-list__section">
              <TodoContainer
                todos={todos}
                setTodo={setTodo}
                filterKeyCompleted={false}
              />
              <TodoContainer
                todos={todos}
                setTodo={setTodo}
                filterKeyCompleted={true}
              />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;
