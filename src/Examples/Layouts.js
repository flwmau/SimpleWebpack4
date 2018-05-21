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
      </div>
    );
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