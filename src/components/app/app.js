import React, { Component } from 'react';
import Banner from '../banner/banner'
import Headline from '../headline/headline'
import TileGallery from '../tile-gallery/tile-gallery'
import './app.scss';

export default class App extends Component {
  render() {
    return(
      <div className="main">
        <Banner/>
        <Headline/>
        <TileGallery/>
      </div>
    )
  }
}
