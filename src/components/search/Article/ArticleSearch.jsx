import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as S from "./style";

export const ArticleSearch = () => {
  const history = useNavigate();
  const navButton = (e) => {
    e.preventDefault();
    history('/');
  }
  return (
    <S.MainContainer>
      <S.MainMenu>
        <S.MenuLogoLink>
          <S.MainLogoImg src='/img/logo.png' alt="logo" onClick={navButton}></S.MainLogoImg>
        </S.MenuLogoLink>
        <S.MenuForm >
          <S.ButtonMenu onClick={navButton}>Вернуться на главную</S.ButtonMenu>
        </S.MenuForm>
      </S.MainMenu>
    </S.MainContainer>
  );
};
