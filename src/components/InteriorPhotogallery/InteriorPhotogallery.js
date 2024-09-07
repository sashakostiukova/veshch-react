import React from 'react';
import interiorAromalamp from '../../images/interior-photogallery/interior-aromalamp.png';
import holder from '../../images/interior-photogallery/holder.png';
import candelholder from '../../images/interior-photogallery/candleholder.png';
import './InteriorPhotogallery.css';

export default function InteriorPhotogallery() {
  return (
    <section className="interior-photogallery">
      <ul className="interior-photogallery__card-list">

        <li className="interior-photogallery__card">
          <img className="interior-photogallery__photo" src={interiorAromalamp} alt=""></img>
          <div className="interior-photogallery__discription">
            <h3 className="interior-photogallery__discription-title">
            Аромалампа “аркада”.
            </h3>
            <p className="interior-photogallery__discription-text">
              Аромалампа для чайной свечи. Также можно использовать 
              как подсвечник{"\n"} для тонкой свечи, или как холдер {"\n"}для украшений.
            </p>
          </div>
        </li>

        <li className="interior-photogallery__card">
          <img className="interior-photogallery__photo interior-photogallery__photo_position_right" src={holder} alt=""></img>
          <div className="interior-photogallery__discription interior-photogallery__discription_align_right">
            <h3 className="interior-photogallery__discription-title">
              Холдер “аркада”.
            </h3>
            <p className="interior-photogallery__discription-text">
              Минималистичный  холдер для украшений или памятных вещиц. Можно использовать 
              как подсвечник для тонких свечей{"\n"} или как салфетницу.
            </p>
          </div>
        </li>

        <li className="interior-photogallery__card">
          <img className="interior-photogallery__photo" src={candelholder} alt=""></img>
          <div className="interior-photogallery__discription">
            <h3 className="interior-photogallery__discription-title">
              Подсвечник “аркада”.
            </h3>
            <p className="interior-photogallery__discription-text">
              Можно использовать как подсвечник для тонких свечей, 
              а также как холдер для фото или заметок.
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}
