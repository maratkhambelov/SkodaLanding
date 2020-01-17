import React, { Component } from 'react';
import Tile from '../tile/tile'
import '../tile/tile.scss'
export default class TileGallery extends Component {
  render() {
    return(
      <div className="tile-gallery">
        <Tile expand={true} title={'Отделение Jumbo Box'} image={'static/media/banner-image.39335aac.png'} subtitle={'Jumbo Box — практичное отделение для хранения вещей, расположенное под регулируемым подлокотником между передними сиденьями. Когда отсек закрыт подлокотником, его содержимое надёжно спрятано от посторонних глаз. Jumbo Box также можно оснастить подстаканниками и монетницей.'}/>
        <Tile title={'вещевое отделение'}  image={'static/media/banner-image.39335aac.png'}/>
        <Tile title={'ящик под сиденьем'}  image={'static/media/banner-image.39335aac.png'}/>
        <Tile expand={true}  title={'держатели для бутылок и мобильных телефонов'} image={'static/media/banner-image.39335aac.png'}/>
      </div>
    )
  }
}
