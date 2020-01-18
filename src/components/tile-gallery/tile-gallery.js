import React, { Component } from 'react';
import Tile from '../tile/tile'
import '../tile/tile.scss'
export default class TileGallery extends Component {
  render() {
    return(
      <div className="tile-gallery">
        <Tile expand={true} title={'Отделение Jumbo Box'} image={'https://i.ibb.co/jLvGw7h/tile1.png'} subtitle={'Jumbo Box — практичное отделение для хранения вещей, расположенное под регулируемым подлокотником между передними сиденьями. Когда отсек закрыт подлокотником, его содержимое надёжно спрятано от посторонних глаз. Jumbo Box также можно оснастить подстаканниками и монетницей.'}/>
        <Tile title={'вещевое отделение'}  image={'https://i.ibb.co/ThbYvq9/tile2.png'}/>
        <Tile title={'ящик под сиденьем'}  image={'https://i.ibb.co/Pj09sC6/tile3.png'}/>
        <Tile expand={true}  title={'держатели для бутылок и мобильных телефонов'} image={'https://i.ibb.co/TwR6LX8/tile4.png'}/>
      </div>
    )
  }
}
