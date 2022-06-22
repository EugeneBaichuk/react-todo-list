import React from "react";
import TodoList from "../todo-list";
import AddTodo from "../add-todo";
import SearchTodo from "../search-todo";
import "./index";

const initialTodoList = [
  { id: 0, label: "Lern React", important: false, done: false },
  { id: 1, label: "Lern JS", important: false, done: false },
  { id: 2, label: "Lern HTML", important: false, done: false },
  { id: 3, label: "Lern CSS", important: false, done: false }
];

export default class Todo extends React.Component {
  state = {
    todoList: initialTodoList,
    term: ""
  };
  // общий метод для обработчиков handlerImportant и HandlerDone
  handlerImportantDone = (id, key) => (e) => {
    e.stopPropagation();
      const arr = this.state.todoList.map((el) => {
        if (el.id === id) {
          return { ...el, [key]: !el[key] };
        } else {
          return el;
        }
      });
      this.setState({ ...this.state, todoList: arr });
  };
  
  handlerAddTodo = (taskName) => {
    //поменял на length т.к. в данном варианте 
    //если все элементы удалены, то при создании нового - возникает ошибка, 
    //const idx = this.state.todoList.at(-1).id; 
    const idx = this.state.todoList.length
    //использовал деструктуризацию для сокращения
    this.setState(({todoList}) => ({
      todoList: [
        ...todoList,
        { id: idx + 1, label: taskName, important: false, done: false }
      ]
    }));
  };
  handlerDeleteTodo = (id) => (e) => {
    e.stopPropagation();
      this.setState(({todoList}) => ({
        todoList: todoList.filter(item => item.id !== id)
      }));
  };
  handlerSerach = (e) => {
    this.setState({ ...this.state, term: e.target.value });
  };
  filterList = () => {
    if (this.state.term) {
      return this.state.todoList.filter((el) =>
        el.label.toLowerCase().includes(this.state.term)
      );
    }
    return this.state.todoList;
  };

  render() {
    const todos = this.filterList();
    
    return (
      <div className="todo">
        <SearchTodo
          value={this.state.term}
          handlerChange={this.handlerSerach}
        />
        <TodoList
          todoList={todos}
          handlerImportantDone={this.handlerImportantDone}
          handlerDeleteTodo={this.handlerDeleteTodo}
        />
        <hr />
        <AddTodo handlerAddTodo={this.handlerAddTodo} />
      </div>
    );
  }
}