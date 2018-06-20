import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


// это объект Приложение
export default class App extends React.Component {
   // это конструктор *внезапно*
   constructor(props) {
      super();
      this.state = {
         todos: []
      }
   }

   // это метод отрисовочки
   render() {
      // это JSX который потом в _createElement превратится и прочие функции, бабель в этом поможет
      return <div>
        { /* Это поле ввода текста */}
         <input type="text" ref={(input) => { this.todoInput = input; }}/>
        { /*Это ещё кнопочка */ }
         <button onClick={this.addItem.bind(this)}>Добавить</button>
         {/* Это кнопочка */}
         <button onClick={this.toggleAll.bind(this)}>Переключить все</button>
         {/* Это список под строчкой с полем и кнопочками */}
         <ol>
            {/* Это вставленный JS код в JSX разметку */}
            {
               // из стейта берем массив с объектами todo и преобразуем в массив с элементом списка (одна строчка
               this.state.todos.map(todo => {
                  // возвращаем тут разметку элемента списка
                  return <li key={todo.id} className={todo.checked ? 'checked' : ''}>
                     {todo.text}
                     {/* Кнопка */}
                     <button onClick={this.toggleStatus.bind(this, todo)}>Сменить статус</button>
                     {/* Кнопка */}
                     <button onClick={this.removeTodo.bind(this, todo)}>Удалить</button>
                  </li>
               })
            }
         </ol>
      </div>
   }

   // метод добавления в стейт объекта *todо который выше будет отрисован
   addItem() {
      const cloneTodos = this.state.todos;
      cloneTodos.push({id: Math.round(Math.random()*1000),text: this.todoInput.value, checked: false});
      this.setState({
         todos: cloneTodos
      });
   }

   // это переключает в массиве туду статус
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

   // это переключить все статусы из массива туду
   toggleAll() {
      this.setState({
         todos: this.state.todos.map(todo => {
            todo.checked = !todo.checked;
            return todo;
         })
      })
   }

   // это метод удаления из стейта и простановка стейта
   removeTodo(removeTodo) {
      const newTodo = this.state.todos.filter(todo => todo.id !== removeTodo.id);
      // МЕТОД setState ЗАСТАВЛЯЕТ ВЫЗВАТЬ render С НОВЫМ МАССИВОМ newTodo и перерисовать без удаленного объекта (логика работает и со всеми методами выше)
      this.setState({
         todos: newTodo
      });
   }
}
// Это чтобы были типо сущности, их можно прокинуть но мне было лень забей
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