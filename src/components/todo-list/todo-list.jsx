import React from "react";
import TodoItem from "../todo-item/todo-item";

export default class TodoList extends React.Component {
  static defaultProps = {
    todoList: [],
    handlerImportant: () => {}
  };

  render() {
    const { todoList, handlerImportantDone, handlerDeleteTodo} = this.props;

    return (
      <div>
        {todoList.map((el) => (
          <TodoItem
            key={el.id}
            item={el}
            handlerImportant={handlerImportantDone(el.id, 'important')}
            handlerDone={handlerImportantDone(el.id, 'done')}
            handlerDeleteTodo={handlerDeleteTodo(el.id)}
          />
        ))}
      </div>
    );
  }
}
