import React, { useState, useRef, useEffect } from "react";
import { SignUpModal } from "../../modals/sign-up/index";
import * as S from "./style";

export const SignInModal = React.forwardRef((props, ref) => {
  const [modal, setModal] = useState(false);
  const toggleModal = (e) => {
    e.preventDefault();
    setModal(!modal);
  }
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.ModalBlock ref={ref}> {props.children}
            <S.ModalForm>
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
              <S.SignUpButton onClick={toggleModal}>
                Зарегистрироваться
              </S.SignUpButton>
              {modal && (
                <SignUpModal ref={ref}/>
              )}
            </S.ModalForm>
          </S.ModalBlock>
        </S.Container>
      </S.Wrapper>
    </>
  );
});
