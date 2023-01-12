import React from "react";
import * as S from "./style";

export const ArticleHeader = () => {

    return(
        <S.Header>
                <S.Nav>
                    <S.Logo>
                        <S.LogoLink href="" target="_blank">
                            <S.LogoImg src="img/logo-mob.png" alt="logo"></S.LogoImg>
                        </S.LogoLink>
                    </S.Logo>
                    <S.PlaceButton id="btputAd">Разместить объявление</S.PlaceButton>
                    <S.PortalButton id="btnlk">Личный кабинет</S.PortalButton>
                </S.Nav>
            </S.Header>

    );
};