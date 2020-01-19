import React, { Component } from 'react';
import './banner.scss'
import Button from '../button/button'

export default class Banner extends Component {
  render() {
    return(
      <div className="banner">
        <div className="banner_image_wrapper">
          <div className="banner_image"></div>
        </div>
        <div className="banner_inner">
          <div className="banner_upper">
            <div className="banner_upper_name">
              ŠKODA
            </div>
            <div className="banner_upper_series">
              KODIAQ
            </div>
          </div>
          <div className="banner_lower">
            <div className="banner_lower_calculates">
              <div className="banner_lower_calculate">
                <div className="explaining_text"> Стоимость от</div>
                <div className="cost">1 454 000 ₽</div>
              </div>
              <div className="banner_lower_calculate">
                <div className="explaining_text"> В месяц </div>
                <div className="cost _with-question">11 900 ₽</div>
                <a href='/'>Рассчитать кредит</a>
              </div>
            </div>
            <div className="banner_lower_buttons">
              <Button label={'Запись на тест-драйв'}/>
              <Button label={'получить предложение'} active={true}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
