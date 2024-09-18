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
          <img className="accessories-photogallery__photo" src={clover}
            alt="Фотография керамической сережки из окрашенной массы в виде четырехлистного клевера"
          />
          <h3 className="accessories-photogallery__card-title">
            Моно серьга “клевер”
          </h3>
        </li>

        <li className="accessories-photogallery__card">
          <img className="accessories-photogallery__photo" src={crumpled}
            alt="Фотография керамической сережки из окрашеной массы в виде неровного кольца"
          />
          <h3 className="accessories-photogallery__card-title">
          Моно серьга “мятая”
          </h3>
        </li>

        <li className="accessories-photogallery__card">
          <img className="accessories-photogallery__photo" src={dragee}
            alt="Фотография керамической сережки из окрашеной массы в виде колечка"
          />
          <h3 className="accessories-photogallery__card-title">
            Моно серьга “драже”
          </h3>
        </li>

        <li className="accessories-photogallery__card">
          <img className="accessories-photogallery__photo" src={corkscrew}
            alt="Фотография керамической сережки из окрашеной массы в виде спирали"
          />
          <h3 className="accessories-photogallery__card-title">
            Моно серьга “штопор”
          </h3>
        </li>

        <li className="accessories-photogallery__card">
          <img className="accessories-photogallery__photo" src={flowerBud}
            alt="Фотография керамической сережки из окрашеной массы в виде соцветия"
          />
          <h3 className="accessories-photogallery__card-title">
            Моно серьга “бутон”
          </h3>
        </li>

        <li className="accessories-photogallery__card">
          <img className="accessories-photogallery__photo" src={swirl}
            alt="Фотография керамической сережки из окрашеной массы в виде небольшой спирали"
          />
          <h3 className="accessories-photogallery__card-title">
            Кольцо “завиток”
          </h3>
        </li>

      </ul>
    </section>
  )
}
