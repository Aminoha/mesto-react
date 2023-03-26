// import logo from "./logo.svg";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup"

function App() {



  const onEditProfile = () => {
    document.querySelector('.popup_update-avatar').classList.add('popup_opened')
        
  }

  // function handleEditProfileClick() {
  //   document.querySelector('.popup_edit-profle').classList.add('popup_opened')
        
  // }

  // function handleAddPlaceClick() {
  //   document.querySelector('.popup_add-card').classList.add('popup_opened')
        
  // }


  return (
    <body className="body">
      <div className="page">
        <Header />
        <Main />
        <Footer />

        <PopupWithForm name="edit-profle" title="Редактировать профиль">
          <input
            id="name-input"
            className="popup__input popup__input_el_name"
            name="name"
            value=""
            placeholder="Введите имя"
            minlength="2"
            maxlength="40"
            required
          />
          <span id="name-input-error" className="popup__input-error"></span>
          <input
            id="descr-input"
            className="popup__input popup__input_el_descr"
            name="about"
            value=""
            placeholder="О себе"
            minlength="2"
            maxlength="200"
            required
          />
          <span
            id="descr-input-error"
            className="popup__input-error popup__input-error_active"
          ></span>
        </PopupWithForm>

        <PopupWithForm name="add-card" title="Новое место">
          <input
            id="title-input"
            className="popup__input popup__input_el_name"
            name="name"
            value=""
            placeholder="Название"
            minlength="2"
            maxlength="30"
            required
          />
          <span id="title-input-error" className="popup__input-error"></span>
          <input
            id="url-input"
            className="popup__input popup__input_el_descr"
            type="url"
            name="link"
            value=""
            placeholder="Ссылка на картинку"
            required
          />
          <span id="url-input-error" className="popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm name="update-avatar" title="Обновить аватар">
          <input
            id="avatar-input"
            className="popup__input popup__input_el_descr"
            type="url"
            name="avatar"
            value=""
            placeholder="Ссылка на картинку"
            required
          />
          <span id="avatar-input-error" className="popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm name="delete" title="Вы уверены?" />
        <ImagePopup />
      </div>
      <template className="card-template">
        <li className="elements__item">
          <article className="elements__card">
            <button
              type="button"
              className="elements__delete"
              name="trash"
            ></button>
            <img className="elements__img" src="#" alt="" />
            <div className="elements__group">
              <h2 className="elements__name"></h2>
              <div className="elements__like">
                <button
                  type="button"
                  className="elements__icon"
                  name="like"
                ></button>
                <p className="elements__count">5</p>
              </div>
            </div>
          </article>
        </li>
      </template>
    </body>
  );
}

export default App;
