function PopupWithForm({ name, isOpen, onClose, title, children, buttonText }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""} `}>
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          onClick={onClose}
        />
        <h3 className="popup__title">{title}</h3>
        <form className="popup__form" name={name}>
          {children}
          <button className="popup__button-save" type="submit" name="save">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
