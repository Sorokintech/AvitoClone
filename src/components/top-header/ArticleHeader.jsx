export const ArticleHeader = () => {

    return(
        <header class="header">
                <nav class="header__nav">
                    <div class="header__logo logo-mob">
                        <a class="logo-mob__link" href="" target="_blank">
                            <img class="logo-mob__img" src="img/logo-mob.png" alt="logo"></img>
                        </a>
                    </div>
                    <button class="header__btn-putAd btn-hov01" id="btputAd">Разместить объявление</button>
                    <button class="header__btn-lk btn-hov01" id="btnlk">Личный кабинет</button>
                </nav>
            </header>

    );
};