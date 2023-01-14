import React, { useState } from "react";
// import { SignUpModal } from "../../modals/sign-up/index";
import * as S from "./style";

export const SignInModal = () => {
  // const [modal, setModal] = useState(false);
  // const toggleModal = () => {
  //   setModal(!modal)
  // }
  const ClickHandler = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <S.Wrapper >
        <S.Container>
          <S.ModalBlock >
            <S.ModalForm id="formLogUp" action="#">
              <S.ModalLogo>
                {/* <img src="../../../public/img/logo_modal.png" alt="logo"></img> */}
              </S.ModalLogo>
              <S.SignUpInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="email"
              ></S.SignUpInput>
              <S.SignUpInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"

              ></S.SignUpInput>
              <S.EnterButton id="SignUpEnter">
               Войти
              </S.EnterButton>
              <S.SignUpButton onClick={ClickHandler} id="SignUpReg" >
                Зарегистрироваться
              </S.SignUpButton>
            </S.ModalForm>
          </S.ModalBlock>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
