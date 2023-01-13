import React from "react";
import * as S from "./style";
import { Main } from "../../../pages/main";

export const ArticleSearch = () => {
  return (
    <S.MainContainer>
      <S.MainMenu>
        <S.MenuLogoLink href="" target="_blank">
          <S.MainLogoImg src="img/logo.png" alt="logo"></S.MainLogoImg>
        </S.MenuLogoLink>
        <S.MenuForm action="#">
          <S.ButtonMenu id="btnGoBack">Вернуться на главную</S.ButtonMenu>
        </S.MenuForm>
      </S.MainMenu>
    </S.MainContainer>
  );
};
