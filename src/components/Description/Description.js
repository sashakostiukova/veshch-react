import React from 'react';
import './Description.css';

export default function Description() {
  return (
    <section className="description">
      <div className="description__text-wrapper">
        <p className="description__text">
          “Вещь — это предмет, опосредованный человеческой деятельностью, 
          любое нечто, самостоятельно существующее {"\n"}в пространстве.”
        </p>
        <p className="description__text">
          Вещь - это авторская керамика для интерьера, 
          для быта, для себя.
        </p>
      </div>
      <div className="description__arrow" />
    </section>
  )
}
