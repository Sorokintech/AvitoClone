import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { AddNewModal } from "../../../modals/addnewat/index"
import { modalAddNewAd } from "../../../store/slices/modal";
import { currentUser } from "../../../store/slices/currentUser";
import * as S from "./style";

export const ArticleHeader = () => {
    const histore = useNavigate();
    const ref = useRef();
    const dispatch = useDispatch();
    const modalAddNewAdIsShown = useSelector((state) => state.modal.modalAddNewAdIsShown);
    const user_id = useSelector((state) => state.auth.id)
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
    useOnClickOutside(ref, () => dispatch(modalAddNewAd(false)));
    const toggleModal = () => {
        dispatch(modalAddNewAd(true))
        document.body.style.overflow = 'hidden';
    }
    const settingCurrentUser =() => {
      dispatch(currentUser(user_id))
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
                    {modalAddNewAdIsShown && (
                        <AddNewModal ref={ref}/>
                    )}
                    <S.PortalButton><NavLink to={'/profile'} onClick={settingCurrentUser}>Личный кабинет</NavLink></S.PortalButton>
                </S.Nav>
            </S.Header>

    );
};