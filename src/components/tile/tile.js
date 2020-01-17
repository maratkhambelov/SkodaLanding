import React, { Component } from 'react';
import './tile.scss';

export default class Tile extends Component {
  render() {
    const {title, subtitle, image, expand} = this.props;
    console.log(image);
    return(
      <div className={`tile ${expand ? '_expand' : ''}`}>
        <div className='tile_none'></div>
        <div  className='tile_background'  style={ { backgroundImage: `url(${image})`} }>
          {/**/}
          <div  className='tile_inner' >
            <div className="tile_text">
              <div className="tile_title">
                {title}
              </div>
              {subtitle ? <div className="tile_subtitle"> {subtitle}</div>  : null}
            </div>
          </div>
        </div>

      </div>
    )
  }
}
