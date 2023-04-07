import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const refInput = useRef(null);

  function handleSumbit(event) {
    event.preventDefault();
    props.onUpdateAvatar({
      avatar: refInput.current.value,
    });
  }

  useEffect(() => {
    refInput.current.value = "";
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleSumbit}
    >
      <input
        id="avatar-input"
        className="popup__input popup__input_el_descr"
        type="url"
        name="avatar"
        ref={refInput}
        placeholder="Ссылка на картинку"
        required
      />
      <span id="avatar-input-error" className="popup__input-error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
