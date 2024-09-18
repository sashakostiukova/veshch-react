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
          <img className="interior-photogallery__photo" src={interiorAromalamp} 
            alt="Фотография керамической аромалампы. В ней горит свеча. Рядом на столе стоит флакон с аромамаслом и разбросаны спички"
          />
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
          <img className="interior-photogallery__photo" src={holder} 
            alt="Фотография керамического холдера из четырех сквозных цилиндров, соединенных вместе. В одной из секций холдера лежат спички, в другой - кольца"
          />
          <div className="interior-photogallery__discription">
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
          <img className="interior-photogallery__photo" src={candelholder} 
            alt="Фотография керамического подсвечника из трех арок, соединенных вместе. В подсвечник вставлены и горят две тонких свечи"
          />
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
