import React, { useEffect, useState } from "react";
import { Button, Input, Modal } from "reactstrap";
import { toggleTodoAsComplete, removeTodo, updateTodoText } from "../utilities";

const TodoItem = ({ todoItem, setTodo }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [checkState, setCheckState] = useState(todoItem.isComplete);
  const [newText, setNewText] = useState("");

  const handleRemoveTodo = () => {
    setTodo(removeTodo(todoItem.id));
  };

  const handleCheckChangeState = () => {
    setTodo(toggleTodoAsComplete(todoItem.id));
  };

  const handleUpdateTextState = () => {
    setTodo(updateTodoText(newText, todoItem.id));
  };

  useEffect(() => {
    setCheckState(todoItem.isComplete);
  }, [todoItem]);

  return (
    <>
      <div className="todo-item">
        <div className="todo-item__details">
          <input
            type="checkbox"
            className="checkbox-styles"
            checked={checkState}
            onChange={handleCheckChangeState}
          />
          <p>{todoItem.text}</p>
        </div>
        <div className="todo-item__actions">
          <div onClick={() => setDisplayModal(true)} className="update-icon">
            <i className="fas fa-pencil-alt"></i>
          </div>
          <div onClick={handleRemoveTodo} className="delete-icon">
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>

      <Modal centered isOpen={displayModal}>
        <div className="modal-header modal-header__styles">
          <h4>{todoItem.text}</h4>
          <div className="close-modal" onClick={() => setDisplayModal(false)}>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="modal-body">
          <Input
            placeholder="update text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <Button onClick={handleUpdateTextState} className="footer-btn" block>
            Update
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default TodoItem;
