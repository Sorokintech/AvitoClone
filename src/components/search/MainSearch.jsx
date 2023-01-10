import React from "react";
import * as S from "./style";

export const MainSearch = () => {

    return (
                <S.MainSearch>
                    <S.SearchLogoLink href="#" target="_blank">
                        <S.SearchLogoImg src="img/logo.png" alt="logo"></S.SearchLogoImg>
                    </S.SearchLogoLink>
                    <S.SearchLogoLinkMob href="#" target="_blank">
                        <S.SearchLogoMobLink src="img/logo-mob.png" alt="logo"></S.SearchLogoMobLink>
                    </S.SearchLogoLinkMob>
                    <S.SearchForm action="#">
                        <S.SearchText type="search" placeholder="Поиск по объявлениям" name="search"></S.SearchText>
                        <S.SearchTextMob type="search" placeholder="Поиск" name="search-mob"></S.SearchTextMob>
                        <S.Button>Найти</S.Button>
                    </S.SearchForm>
                </S.MainSearch>
    );
};