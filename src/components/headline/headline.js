import React, { Component } from 'react';
import Button from '../button/button'
import './headline.scss';

export default class Headline extends Component {
  render() {
    return(
      <div className="headline">
        <div className="headline_title">
          интеллектуальное воплощение роскоши
        </div>
        <div className="headline_subtitle">
          Кристаллические мотивы, положенные в основу прекрасного дизайна, формируют силуэт, который выглядит неотразимо с любого ракурса.
          Коммуникационные возможности, комфорт, системы безопасности и высокотехнологичные функции, свойственные моделям более высоких классов, полностью отвечают всем требованиям водителя XXI века.
        </div>
        <div className="headline_buttons">
          <Button label={'скачать брошюру'} icon={true} active={true}/>
          <Button label={'скачать прайс-лист'} icon={true}/>
        </div>
      </div>
    )
  }
}
