import React from "react";
import * as S from "./style";

export const SignUpModal = React.forwardRef((props, ref) => {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.ModalBlock ref={ref}> {props.children}
            <S.ModalForm>
              <S.ModalLogo src="img/logo_modal.png">
              </S.ModalLogo>
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
              <S.SignUpInput
                type="password"
                name="password"
                id="passwordSecond"
                placeholder="Повторите пароль"
                autoComplete="off"
              ></S.SignUpInput>
              <S.SignUpInput
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя (необязательно)"
                autoComplete="off"
              ></S.SignUpInput>
              <S.SignUpInput
                type="text"
                name="first-last"
                id="first-last"
                placeholder="Фамилия (необязательно)"
                autoComplete="off"
              ></S.SignUpInput>
              <S.SignUpInput
                type="text"
                name="city"
                id="city"
                placeholder="Город (необязательно)"
                autoComplete="off"
              ></S.SignUpInput>
              <S.SignUpButton>
                Зарегистрироваться
              </S.SignUpButton>
            </S.ModalForm>
          </S.ModalBlock>
        </S.Container>
      </S.Wrapper>
    </>
  );
});
