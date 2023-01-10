

export const ProfileInfo = () => {
    

    return( 
        <div>
        <h2 class="main__h2">Здравствуйте, Антон!</h2>
                        
                        <div class="main__profile profile">
                            <div class="profile__content">
                                <h3 class="profile__title title">Настройки профиля</h3>
                                <div class="profile__settings settings">
                                    <div class="settings__left">
                                        <div class="settings__img">
                                            <a href="" target="_self">
                                                <img src="#" alt=""></img>
                                            </a>
                        
                                        </div>
                                        <a class="settings__change-photo" href="" target="_self">
                                            Заменить
                                        </a>
                                    </div>
                                    <div class="settings__right">
                                        <form class="settings__form" action="#">
                                            <div class="settings__div">
                                                <label for="fname">Имя</label>
                                                <input class="settings__f-name" id="settings-fname" name="fname" type="text" value="Ан" placeholder=""></input>
                                            </div>
                        
                                            <div class="settings__div">
                                                <label for="lname">Фамилия</label>
                                                <input class="settings__l-name" id="settings-lname" name="lname" type="text" value="Городецкий" placeholder=""></input>
                                            </div>
                        
                                            <div class="settings__div">
                                                <label for="city">Город</label>
                                                <input class="settings__city" id="settings-city" name="city" type="text" value="Санкт-Петербург" placeholder=""></input>
                                            </div>
                        
                                            <div class="settings__div">
                                                <label for="phone">Телефон</label>
                                                <input class="settings__phone" id="settings-phone" name="phone" type="tel" value="89161234567" placeholder="+79161234567"></input>
                                            </div>
                        
                                            <button class="settings__btn btn-hov02" id="settings-btn">Сохранить</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
    )
}