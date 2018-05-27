import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';
import 'jquery-ui/ui/widget';

import './index.css';


// Делишки
class Todo {
  constructor(text, isDone) {
    this.todo = {text: text, isDone: isDone, id: Math.round(Math.random()*1000)};
  }

  getText() {
    if (this.todo) {
      return this.todo.text;
    }
  }
  setText(v) {
    if (this.todo) {
      this.todo.text = v;
    }
  }
  toggleStatus() {
    if (this.todo) {
      this.todo.isDone = !this.todo.isDone;
    }
  }
}

$(document).ready(
  function(){
    let todos = [];

    $("input[name=ListItem]").keyup(() => {
      if(event.keyCode == 13){
        $("#button").click();
      }
    });

    $(document).on('dblclick','li', (event) => {
      $(this).toggleClass('strike');
      document.todos = document.todos.filter(item => item.getText() !== $(this).text());
    });

    $(document).on('click', '#removeBtn', (event) => {
      $(this.parentElement).attr('class');
      console.log('removed');
    });

    $('input').focus(function() {
      $(this).val('');
    });

    $('ol').sortable();

    $('#button').click(() => {
      const todoText = $('input[name=ListItem]').val();
      const isDone = $('#tool_checked').prop('checked');
      if (todoText) {
        todos.push(new Todo(todoText, isDone));
        render();
      }
    });

    const render = function() {
      // Очистим контейнер
      $('ol').empty();

      function todoRender(todoElement) {
        return `<li> ${todoElement.getText()} <button class="${todoElement.todo.id}" id="removeBtn">Удалить</button></li>`;
      }

      todos.forEach(item => {
        $('ol').append(todoRender(item));
      });
    }
  }
);
