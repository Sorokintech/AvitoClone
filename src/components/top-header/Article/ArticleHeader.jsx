import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AddNewModal } from "../../../modals/addnewat/index"
import * as S from "./style";

export const ArticleHeader = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return(
        <S.Header>
                <S.Nav>
                    <S.Logo>
                        <S.LogoLink href="" target="_blank">
                            <S.LogoImg src="img/logo-mob.png" alt="logo"></S.LogoImg>
                        </S.LogoLink>
                    </S.Logo>
                    <S.PlaceButton id="btputAd" onClick={toggleModal}>Разместить объявление</S.PlaceButton>
                    {modal && (
                        <AddNewModal/>
                    )}
                    <S.PortalButton id="btnlk"><NavLink to={'/profile'}>Личный кабинет</NavLink></S.PortalButton>
                </S.Nav>
            </S.Header>

    );
};