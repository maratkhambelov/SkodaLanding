import React, { Component } from 'react';
import './tile.scss';

export default class Tile extends Component {
  render() {
    const {title, subtitle, image, expand} = this.props;
    return (
      <div className={`tile ${expand ? '_expand' : ''}`}>
        <div className='tile_space'></div>
        <div  className='tile_background'  style={ { backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5) 100%, rgb(0, 0, 0) 100%),  url(${image})`} }>
          <div  className='tile_inner'>
            <div className="tile_text">
              <div className="tile_text_title">
                {title}
              </div>
              {subtitle ? <div className="tile_text_subtitle"> {subtitle}</div>  : null}
            </div>
          </div>
        </div>

      </div>
    )
  }
}
