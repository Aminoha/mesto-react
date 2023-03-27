function ImagePopup(props) {
  return (
    <div
      className={`popup popup_open-pic ${
        props.card.name ? "popup_opened" : ""
      }`}
    >
      <figure className="popup__figure">
        <button
          className="popup__button-close"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image"
          src={props.card.link}
          alt={props.card.name}
        />
        <figcaption className="popup__image-descr">
          {props.card.name}
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
