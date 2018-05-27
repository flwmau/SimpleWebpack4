import React from 'react';
import ReactDOM from 'react-dom';

import './todo-jquery.css';

export default class TodoJquery extends React.Component {
  constructor(props) {
    super();
    this.todos = [];
  }

  render1() {
    return (
      <div className="todo">
        {this.renderHeader()}
        {this.renderInformationLabel()}

      </div>
    );
  }

  renderHeader() {
    return <div className="todo__tools">
      <div className="todo__label todo__label-margin6">Что хотите сделать</div>
      <input type="text" placeholder="Что хотите сделать" onKeyPress={this.addNewTodoHandler.bind(this)}/>
    </div>
  };

  renderInformationLabel() {
    return <div className="todo__label todo__label-center todo__divider">
      Тут будет отображаться список ваших дел
    </div>;
  }

  addNewTodoHandler(event) {
    if (event.key === 'Enter') {
      this.todos.push(new Todo(this.props, event.target.value, this.todos.length+1));
      this.render();
    }
  }

  renderRemoveButton() {
    return <button onClick={this.removeTodoHandler.bind(this)}></button>
  };

  renderAddButton() {
    return <button onClick={this.addTodoHandler.bind(this)}></button>
  }

  removeTodoHandler(event) {

  }

  render() {

  }
}

class Todo {
  constructor(text, isDone, color, isFavorites) {
    this.id = Math.random();
    this.text = text;
    this.isDone = isDone;
    this.color = color;
    this.isFavorites = isFavorites;
  }

  getId() {
    return this.id;
  }

  getText() {
    return this.text;
  }

  setText(v) {
    this.text = v;
  }

  getStatus() {
    return this.isDone;
  }

  setStatus(v) {
    this.isDone = v;
  }
  getColor() {
    return this.color;
  }
  setColor(v) {
    this.color = v;
  }
  getFavoritesStatus() {
    return this.isFavorites;
  }
  toggleFavoritesStatus() {
    this.isFavorites = !this.isFavorites;
  }
}

class TodoList {
  constructor(todoList) {
    this.todoList = todoList;
  }

  removeTodo(todo) {
    this.todoList = this.todoList.filter(_todo => _todo !== todo);
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }

  editTodo(todo) {
    this.todoList = this.todoList.map(_todo => _todo !== todo ? _todo : _todo.setText(todo.getText()));
  }

  clearTodoList() {
    this.todoList = [];
  }

  getTodoList() {
    return this.todoList;
  }
}