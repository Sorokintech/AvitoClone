

export const MainSearch = () => {

    return (
                <div class="main__search search">
                    <a class="search__logo-link" href="#" target="_blank">
                        <img class="search__logo-img" src="img/logo.png" alt="logo"></img>
                    </a>
                    <a class="search__logo-mob-link" href="#" target="_blank">
                        <img class="search__logo-mob-img" src="img/logo-mob.png" alt="logo"></img>
                    </a>
                    <form class="search__form" action="#">
                        <input class="search__text" type="search" placeholder="Поиск по объявлениям" name="search"></input>
                        <input class="search__text-mob" type="search" placeholder="Поиск" name="search-mob"></input>
                        <button class="search__btn btn-hov02">Найти</button>
                    </form>
                </div>
    );
};