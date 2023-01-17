import React from "react";
import { useDispatch } from "react-redux";
import { search } from "../../../store/slices/search";
import * as S from "./style";

export const MainSearch = () => {

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    dispatch(search((e.target).value));
  };

  const findHandler = (e) => {
    e.preventDefault();
    
  }
  return (
    <S.Search>
      <S.SearchLogoLink href="#" target="_blank">
        <S.SearchLogoImg src="img/logo.png" alt="logo"></S.SearchLogoImg>
      </S.SearchLogoLink>
      <S.SearchLogoLinkMob href="#" target="_blank">
        <S.SearchLogoMobLink
          src="img/logo-mob.png"
          alt="logo"
        ></S.SearchLogoMobLink>
      </S.SearchLogoLinkMob>
      <S.SearchForm action="#">
        <S.SearchText
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
          onChange={onChangeHandler}
        ></S.SearchText>
        <S.SearchTextMob
          type="search"
          placeholder="Поиск"
          name="search-mob"
        ></S.SearchTextMob>
        <S.Button onClick={findHandler}>Найти</S.Button>
      </S.SearchForm>
    </S.Search>
  );
};
