import React from "react";
import "./index.css";

export default class TodoItem extends React.Component {
  static defaultProps = {
    item: { id: 0, label: "test", important: false, done: false },
    handlerImportant: () => {}
  };
  render() {
    const { item, handlerImportant, handlerDone, handlerDeleteTodo} = this.props;
    
    return (
      <div className={item.done ? "todo-item done": "todo-item"} onClick={handlerImportant}>
        <div className={item.done ? "underlined": ""}>
          {item.label}
        </div>
        <div className="nav">
          {item.important && <div className="red" />}
          <div
            className="check"
            onClick={handlerDone}
          >
            ✓ Done
          </div>
          <div className="delete" onClick={handlerDeleteTodo}>Delete</div>
        </div>
        
      </div>
    );
  }
}
