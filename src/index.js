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
  // гетер получения текста для делишек
  getText() {
    if (this.todo) {
      return this.todo.text;
    }
  }
  // сетер кладет в обхект делишек текст
  setText(v) {
    if (this.todo) {
      this.todo.text = v;
    }
  }
  // статус переключает, меняет у делишек переменнуюу
  toggleStatus() {
    if (this.todo) {
      this.todo.isDone = !this.todo.isDone;
    }
  }
}
// это хрень, которая всегда выполняется
$(document).ready(
  function(){
    // это типо как в реакте this.state.туду а тут прямо в реди лежит
    let todos = [];

    // берем строчку для ввода из html index.html
    // вешаем событие и смотрим когда энтер жмякнут то позови событие клика по кнопке, которая добавлет в туду массив объект массива
    $("input[name=ListItem]").keyup(() => {
      if(event.keyCode == 13){
        $("#button").click();
      }
    });
    // это на дабл клик по тудушке событие на все ЛИ вешаем его и фильтруем массивчики и меняем на новый без удаленного
    $(document).on('dblclick','li', (event) => {
      $(this).toggleClass('strike');
      document.todos = document.todos.filter(item => item.getText() !== $(this).text());
    });

    // событие удаления висит на кнопке удаления
    $(document).on('click', '#removeBtn', (event) => {
      $(this.parentElement).attr('class');
      console.log('removed');
    });

    //на фокус инпута очищаем, чтобы при уходе и снова фокусе всегда чистая строчка была
    $('input').focus(function() {
      $(this).val('');
    });
    // сортировочка Жкверная хрень, работает на списке и диЭнДи рабоатет
    $('ol').sortable();

    // событие добавления тудушки
    $('#button').click(() => {
      // берем текст из инпута
      const todoText = $('input[name=ListItem]').val();
      // из галочки берем статус
      const isDone = $('#tool_checked').prop('checked');
      // проверяем что что-то ввели в инпут
      if (todoText) {
        // и кладем в массивчик
        todos.push(new Todo(todoText, isDone));
        // вызываем перерисовку интерфейсика
        render();
      }
    });

    const render = function() {
      // Очистим контейнер
      $('ol').empty();

      // функция вовзращает разметку view по данным todoElement
      function todoRender(todoElement) {
        return `<li> ${todoElement.getText()} <button class="${todoElement.todo.id}" id="removeBtn">Удалить</button></li>`;
      }

      // идем по массиву и в элемент OL из html разметки вставляем разметку выше т.е. формируем эдакий html из jsa
      todos.forEach(item => {
        $('ol').append(todoRender(item));
      });
    }
  }
);
