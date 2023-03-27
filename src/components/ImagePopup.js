function ImagePopup() {
  return (
    <div className="popup popup_open-pic">
      <figure className="popup__figure">
        <button className="popup__button-close" type="button"></button>
        <img className="popup__image" src="#" alt="" />
        <figcaption className="popup__image-descr"></figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup
