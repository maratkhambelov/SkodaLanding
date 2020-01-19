import React, { Component } from 'react';
import './button.scss';

export default class Button extends Component {
  render() {
    const {label, active, icon} = this.props;

    let classNames = 'button';

    if(active) {
      classNames += ' _active';
    }
    if(icon) {
      classNames += ' _with-icon';
    }

    return(
      <div className={classNames}>
        {icon ? <div className='button_image-wrap'><div className='button_image' ></div></div> : null}
        <span>{label}</span>
      </div>
    )
  }
}
