import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditFrofilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleSumbit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  function hadleChangeName(evt) {
    setName(evt.target.value);
  }

  function hadleChangeAbout(evt) {
    setDescription(evt.target.value);
  }

  return (
    <PopupWithForm
      name="edit-profle"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleSumbit}
    >
      <input
        id="name-input"
        className="popup__input popup__input_el_name"
        name="name"
        type="text"
        placeholder="Введите имя"
        minLength="2"
        maxLength="40"
        value={name}
        onChange={hadleChangeName}
        required
      />
      <span id="name-input-error" className="popup__input-error" />
      <input
        id="descr-input"
        className="popup__input popup__input_el_descr"
        name="about"
        type="text"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        value={description}
        onChange={hadleChangeAbout}
        required
      />
      <span
        id="descr-input-error"
        className="popup__input-error popup__input-error_active"
      />
    </PopupWithForm>
  );
}

export default EditFrofilePopup;
