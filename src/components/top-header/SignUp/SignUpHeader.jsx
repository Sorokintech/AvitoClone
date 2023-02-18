import React, { useState, useRef, useEffect } from "react";
import { useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignInModal } from "../../../modals/sign-in";   
import { SignUpModal } from "../../../modals/sign-up";
import { signInActive, signUpActive } from "../../../store/slices/auth";
import * as S from "./style";

export const SignUpHeader = () => {
  const modalSignInActive = useSelector((state) => state.auth.signInActive)
  const modalSignUpActive = useSelector((state) => state.auth.signUpActive)
  const ref = useRef();
  const dispatch = useDispatch();
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
  useOnClickOutside(ref, () => dispatch(signInActive(false)));

  const toggleModal = () => {
      dispatch(signInActive(true))
      document.body.style.overflow = 'hidden';
    };

  return (
    <S.Header >
      <S.HeaderNav>
        <S.Button id="btnMainEnter"  onClick={toggleModal}>
          Вход в личный кабинет
        </S.Button>
        {modalSignInActive && (
          <>
            <SignInModal ref={ref} />
          </>
        )}
        {modalSignUpActive && (
          <>
            <SignUpModal ref={ref} />
          </>
        )}
      </S.HeaderNav>
    </S.Header>
  );
};
