import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./style";

export const ArticleSearch = () => {
  return (
    <S.MainContainer>
      <S.MainMenu>
        <S.MenuLogoLink href="" target="_blank">
          <S.MainLogoImg src="img/logo.png" alt="logo"></S.MainLogoImg>
        </S.MenuLogoLink>
        <S.MenuForm action="#">
          <S.ButtonMenu id="btnGoBack"><NavLink to={'/'}>Вернуться на главную</NavLink></S.ButtonMenu>
        </S.MenuForm>
      </S.MainMenu>
    </S.MainContainer>
  );
};
