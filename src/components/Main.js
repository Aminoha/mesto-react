function Main(props) {

  function handleEditAvatarClick() {
    document.querySelector('.popup_update-avatar').classList.add('popup_opened')
        
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_edit-profle').classList.add('popup_opened')
        
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_add-card').classList.add('popup_opened')
        
  }



  return (
    <main className="content">
      <section className="profile">
        <div className="profile__items">
          <button className="profile__pic-button" onClick={handleEditAvatarClick}>
            <img className="profile__pic" src="#" alt="Фотография профиля" />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">Жак Жан</h1>
            <p className="profile__about">Странный человек</p>
            <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements">
        <ul className="elements__items"></ul>
      </section>
    </main>
  );
}



export default Main