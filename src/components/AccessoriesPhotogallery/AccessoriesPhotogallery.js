import React from 'react';
import clover from '../../images/accessories-photogallery/clover.png';
import crumpled from '../../images/accessories-photogallery/crumpled.png';
import dragee from '../../images/accessories-photogallery/dragee.png';
import corkscrew from '../../images/accessories-photogallery/corkscrew.png';
import flowerBud from '../../images/accessories-photogallery/flower-bud.png';
import swirl from '../../images/accessories-photogallery/swirl.png';
import './AccessoriesPhotogallery.css';

export default function AccessoriesPhotogallery() {
  return (
    <section className="accessories-photogallery">
      <ul className="accessories-photogallery__card-list">

        <li className="accessories-photogallery__card">
          <img className="accessories-photogallery__photo" src={clover} alt=""></img>
          <h3 className="accessories-photogallery__card-title">
            Моно серьга “клевер”
          </h3>
        </li>

        <li className="accessories-photogallery__card">
          <img className="accessories-photogallery__photo" src={crumpled} alt=""></img>
          <h3 className="accessories-photogallery__card-title">
          Моно серьга “мятая”
          </h3>
        </li>

        <li className="accessories-photogallery__card">
          <img className="accessories-photogallery__photo" src={dragee} alt=""></img>
          <h3 className="accessories-photogallery__card-title">
            Моно серьга “драже”
          </h3>
        </li>

        <li className="accessories-photogallery__card">
          <img className="accessories-photogallery__photo" src={corkscrew} alt=""></img>
          <h3 className="accessories-photogallery__card-title">
            Моно серьга “штопор”
          </h3>
        </li>

        <li className="accessories-photogallery__card">
          <img className="accessories-photogallery__photo" src={flowerBud} alt=""></img>
          <h3 className="accessories-photogallery__card-title">
            Моно серьга “бутон”
          </h3>
        </li>

        <li className="accessories-photogallery__card">
          <img className="accessories-photogallery__photo" src={swirl} alt=""></img>
          <h3 className="accessories-photogallery__card-title">
            Кольцо “завиток”
          </h3>
        </li>

      </ul>
    </section>
  )
}
