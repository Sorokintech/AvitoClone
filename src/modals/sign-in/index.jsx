import React, { useState, useRef, useEffect } from "react";
// import { SignUpModal } from "../../modals/sign-up/index";
import * as S from "./style";

export const SignInModal = React.forwardRef((props, ref) => {
  const ClickHandler = (e) => {
    e.preventDefault();
  };
  const logger = (e) => {
    console.log(e.target);
  }


  return (
    <>
      <S.Wrapper onClick={logger}>
        <S.Container>
          <S.ModalBlock ref={ref}> {props.children}
            <S.ModalForm id="formLogUp" action="#">
              <S.ModalLogo src="img/logo_modal.png"></S.ModalLogo>
              <S.SignUpInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="email"
                autoComplete="off"
              ></S.SignUpInput>
              <S.SignUpInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                autoComplete="off"
              ></S.SignUpInput>
              <S.EnterButton id="SignUpEnter">Войти</S.EnterButton>
              <S.SignUpButton onClick={ClickHandler} id="SignUpReg">
                Зарегистрироваться
              </S.SignUpButton>
            </S.ModalForm>
          </S.ModalBlock>
        </S.Container>
      </S.Wrapper>
    </>
  );
});
