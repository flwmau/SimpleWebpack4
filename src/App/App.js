import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';



export default class App extends React.Component {
   constructor(props) {
      super();
      this.state = {
         todos: []
      }
   }

   render() {
      return <div>
         <input type="text" ref={(input) => { this.todoInput = input; }} />
         <button onClick={this.addItem.bind(this)}>Добавить</button>
         <button onClick={this.toggleAll.bind(this)}>Переключить все</button>
         <ol>
            {
               this.state.todos.map(todo => {
                  return <li key={todo.id} className={todo.checked ? 'checked' : ''}>
                     {todo.text}
                     <button onClick={this.toggleStatus.bind(this, todo)}>Сменить статус</button>
                     <button onClick={this.removeTodo.bind(this, todo)}>Удалить</button>
                  </li>
               })
            }
         </ol>
      </div>
   }



  /* rende1r() {
      return <div>
         Введите задачу тут:
         <input type="text" ref={(input) => { this.todoInput = input; }} />
         <button onClick={this.addItem.bind(this)}>Добавить</button>
         <TodoList todos={this.state.todos} removeTodo={this.removeTodo.bind(this)}/>
      </div>;
   }*/

   addItem() {
      const cloneTodos = this.state.todos;
      cloneTodos.push({id: Math.round(Math.random()*1000),text: this.todoInput.value, checked: false});
      this.setState({
         todos: cloneTodos
      });
   }

   toggleStatus(toggleTodo) {
      this.setState({
         todos: this.state.todos.map(todo => {
            if (todo.id === toggleTodo.id) {
               todo.checked = !todo.checked;
            }
            return todo;
         })
      });
   }

   toggleAll() {
      this.setState({
         todos: this.state.todos.map(todo => {
            todo.checked = !todo.checked;
            return todo;
         })
      })
   }

   removeTodo(removeTodo) {
      const newTodo = this.state.todos.filter(todo => todo.id !== removeTodo.id);
      this.setState({
         todos: newTodo
      });
   }
}

class TodoList extends React.Component {
   constructor(props) {
      super();
   }

   render() {
      return <ol>
         {this.props.todos.map(todo => {
            return <Todo key={todo.id} item={ todo } removeTodo={this.props.removeTodo}/>
         })}
      </ol>
   }
}

class Todo extends React.Component {
   constructor(props) {
      super();
   }

   render() {
      return <li className="todo">
         {this.props.item.text}
         <button>Выполнено</button>
         <button onClick={this.removeTodo.bind(this)}>Удалить</button>
      </li>;
   }

   removeTodo(id) {
      this.props.removeTodo(id);
   }
}

ReactDOM.render(<App />, document.getElementById('app'));