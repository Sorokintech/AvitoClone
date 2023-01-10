import React from "react";
import * as S from "./style";

export const SignUpHeader = () => {

    return(
        <S.Header class="header">
                <S.HeaderNav class="header__nav">                    
                        <S.Button class="header__btn-main-enter btn-hov01" id="btnMainEnter">Вход в личный кабинет</S.Button>
                </S.HeaderNav>
            </S.Header>
    );
};