import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as S from "./style";

export const Footer = () => {

    const userIsLogged = useSelector((state) => state.auth.isLogin)
    return (
        <S.Footer>
        <S.FooterContainer>
            <S.FooterImg>
                    <NavLink to={"/"}><img src="/img/icon_01.png" alt="main"></img></NavLink>
            </S.FooterImg>
            <S.FooterImg>
            {userIsLogged ? <NavLink to={"/add_new_ad"}><img src="/img/icon_02.png" alt="home"></img></NavLink> : <NavLink to={"/sign_in"}><img src="/img/icon_02.png" alt="main"></img></NavLink> }
                </S.FooterImg>
            <S.FooterImg>
              {userIsLogged ? <NavLink to={"/profile"}><img src="/img/icon_01.png" alt="main"></img></NavLink> : <NavLink to={"/sign_in"}><img src="/img/icon_01.png" alt="main"></img></NavLink> }
                </S.FooterImg>
        </S.FooterContainer>
    </S.Footer>
    )
}