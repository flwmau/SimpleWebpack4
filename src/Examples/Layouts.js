import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './Layout.css';


export default class Layouts extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="layout">
        <div className="layout1">
          {this.layoutTitleRender('7.i: Понимаем разные контейнеры')}
          <div className="layout_static">
            <div className="container">
              Статичный
              <div class="row">
                <div class="col-sm-4">
                  Колонка1
                </div>
                <div class="col-sm-6">
                  Колонка2
                </div>
                <div class="col-md-2 col-sm-2">
                  Колонка3
                </div>
              </div>
            </div>
          </div>
          <div className="layout_fluid">
            <div className="container-fluid">
              Адаптивный
              <div class="row">
                <div class="col-sm">
                  Колонка1
                </div>
                <div class="col-sm">
                  Колонка2
                </div>
                <div class="col-sm">
                  Колонка3
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.dividerRender()}
        {this.layoutRender2()}
         {this.renderComponents()}
         {this.cardRender()}
         {this.tabRender()}
      </div>
    );
  }

  /*modalRender() {
     return <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
        <div class="modal-dialog" role="document">
           <div class="modal-content">
              <div class="modal-header">
                 <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                 </button>
              </div>
              <div class="modal-body">
                 ...
              </div>
              <div class="modal-footer">
                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                 <button type="button" class="btn btn-primary">Save changes</button>
              </div>
           </div>
        </div>
     </div>;
  }*/

  renderComponents() {
     return (<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">навигация</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                 <a class="nav-link" href="#">Домой <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                 <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Выпадающий
                 </a>
                 <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Действие1</a>
                    <a class="dropdown-item" href="#">Действие2</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Чтотто</a>
                 </div>
              </li>
              <li class="nav-item">
                 <a class="nav-link disabled" href="#">залочено</a>
              </li>
           </ul>
           <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                 <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</button>
           </form>
        </div>
     </nav>);
  }

  cardRender() {
     return <div class="card">
           <div class="card-body">
              <h5 class="card-title">Заголовок</h5>
              <p class="card-text">Текст для карт.</p>
              <a href="#" class="btn btn-primary">Переходики</a>
           </div>
     </div>;
  }

  tabRender() {
     return <ul class="nav nav-tabs">
        <li class="nav-item">
           <a class="nav-link active" href="#">Текущая</a>
        </li>
        <li class="nav-item">
           <a class="nav-link" href="#">Ссылка1</a>
        </li>
        <li class="nav-item">
           <a class="nav-link" href="#">Ссылка1</a>
        </li>
        <li class="nav-item">
           <a class="nav-link disabled" href="#">залоченная</a>
        </li>
     </ul>;
  }

  dividerRender() {
    return <div className="divider"></div>;
  }

  layoutTitleRender(text) {
    return <div className="layout__title">
      <span>{text}</span>
    </div>;
  }

  layoutRender2() {
    const eightRow = ['Одна', 'Две', 'Три','Четыре', 'Пять', 'Шесть','Семь', 'Восемь'];
    let rows = [];
    for(let i = 4; i<9;i++) {
      rows.push(this.rowRender(eightRow, i));
    }




    return <div className="layout2">
      {this.layoutTitleRender('7ii: создать строки с различным количеством колонок, попробовать явное и неявное (auto-layout) задание ширины колонок. Понять принцип именования классов колонок различной ширины. Создать несколько строк с колонками одинаковой ширины с помощью класса .w-100;')}
      <div className="container">
        <div className="row">
          <div className="col-sm">Одна</div>
        </div>
        {rows}
      </div>
      {this.layoutTitleRender('Явное и неявное (auto-layout Выше все было там смотреть) задание ширины колонок')}
      {/* none sm md lg xl*/ }
      <div className="row">
        <div className="col-sm-10">1 of 2 sm</div>
        <div className="col-sm-2">2 of 2 sm</div>
      </div>
      {
        this.colRowRender([2, 3, 4, 3].map(num => this.renderColSpecific(num, `В ${num} колонок`)))
      }
      {this.layoutTitleRender('w-100 Пример')}
      {this.renderInOneRow([1, 2, 3, 4])}
    </div>
  }

  renderInOneRow(colSizes) {
    let result = [];
    colSizes.forEach((num, index) => {
      let i = 0;
      while (i !== num) {
        result.push(<div className="col">{`Номер строки: ${index+1}, номер колонки: ${i+1}`}</div>);
        i++;
      }
      result.push(<div className="w-100"></div>);
    });

    return <div className="row">{result}</div>
  }

  renderColSpecific(colSize, text) {
    return <div className={`col-${colSize}`}>{text}</div>
  }

  colRowRender(cols) {
    return <div class="row">{cols}</div>;
  }

  rowRender(textArray, colCount) {
    return <div className="row">
      {
        textArray.map((text, index) => index < colCount ? this.colRender(`Колонка номер: ${index + 1} и текстом: ${text}`) : null)
      }
    </div>
  }

  colRender(text) {
    return <div className="col">{text}</div>;
  }
}