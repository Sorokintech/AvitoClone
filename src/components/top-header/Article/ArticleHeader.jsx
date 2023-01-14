import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AddNewModal } from "../../../modals/addnewat/index"
import * as S from "./style";

export const ArticleHeader = () => {
    const [modal, setModal] = useState(false);
    const ref = useRef();
    function useOnClickOutside(ref, handler) {
      useEffect(
        () => {
          const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
              return;
            }
            handler(event);
            document.body.style.removeProperty('overflow');
          };
          document.addEventListener("mousedown", listener);
          document.addEventListener("touchstart", listener);
          return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
          };
        },
        [ref, handler]
      );
    }
    useOnClickOutside(ref, () => setModal(false));
    const toggleModal = () => {
        setModal(!modal)
        document.body.style.overflow = 'hidden';
    }

    return(
        <S.Header>
                <S.Nav>
                    <S.Logo>
                        <S.LogoLink>
                            <S.LogoImg src="img/logo-mob.png" alt="logo"></S.LogoImg>
                        </S.LogoLink>
                    </S.Logo>
                    <S.PlaceButton onClick={toggleModal}>Разместить объявление</S.PlaceButton>
                    {modal && (
                        <AddNewModal ref={ref}/>
                    )}
                    <S.PortalButton><NavLink to={'/profile'}>Личный кабинет</NavLink></S.PortalButton>
                </S.Nav>
            </S.Header>

    );
};