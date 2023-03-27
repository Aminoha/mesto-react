function Card({card}) {
  return (
    <li className="elements__item">
      <article className="elements__card">
        <button
          type="button"
          className="elements__delete"
          name="trash"
        ></button>
        <img className="elements__img" src={card.link} alt="" />
        <div className="elements__group">
          <h2 className="elements__name">{card.name}</h2>
          <div className="elements__like">
            <button
              type="button"
              className="elements__icon"
              name="like"
            ></button>
            <p className="elements__count">{card.likes}</p>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
