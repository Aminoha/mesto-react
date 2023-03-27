import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfile] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatar] = React.useState(false);

  function handleEditProfileClick() {
    setEditProfile(true);
  }

  function handleEditAvatarClick() {
    setEditAvatar(true);
  }

  function handleAddPlaceClick() {
    setAddPlace(true);
  }

  function closeAllPopups() {
    setEditProfile(false);
    setEditAvatar(false);
    setAddPlace(false);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />

        <PopupWithForm
          name="edit-profle"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          
        >
          <input
            id="name-input"
            className="popup__input popup__input_el_name"
            name="name"
            defaultValue=""
            placeholder="Введите имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span id="name-input-error" className="popup__input-error"></span>
          <input
            id="descr-input"
            className="popup__input popup__input_el_descr"
            name="about"
            defaultValue=""
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
          />
          <span
            id="descr-input-error"
            className="popup__input-error popup__input-error_active"
          ></span>
        </PopupWithForm>

        <PopupWithForm
          name="add-card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="title-input"
            className="popup__input popup__input_el_name"
            name="name"
            defaultValue=""
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="title-input-error" className="popup__input-error"></span>
          <input
            id="url-input"
            className="popup__input popup__input_el_descr"
            type="url"
            name="link"
            defaultValue=""
            placeholder="Ссылка на картинку"
            required
          />
          <span id="url-input-error" className="popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="update-avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="avatar-input"
            className="popup__input popup__input_el_descr"
            type="url"
            name="avatar"
            defaultValue=""
            placeholder="Ссылка на картинку"
            required
          />
          <span id="avatar-input-error" className="popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm name="delete" title="Вы уверены?" />
        <ImagePopup />
      </div>
    </>
  );
}

export default App;
