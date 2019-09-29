import React from "react";

function Contents({ todos, onUpdateStatus, onDeleteTodo }) {
  return (
    <div>
      {todos.map(({ text, id, isDone }) => (
        <div key={id}>
          <input
            type="checkbox"
            value={isDone}
            checked={isDone}
            onChange={() => onUpdateStatus(id)}
          />
          <span>{text}</span>
          <button onClick={() => onDeleteTodo(id)}>삭제</button>
        </div>
      ))}
    </div>
  );
}

export default Contents;
