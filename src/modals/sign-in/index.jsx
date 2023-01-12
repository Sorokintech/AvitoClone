import * as S from "./style";

export const SignInModal = () => {
    return(
        <S.Wrapper>
        <S.Container>
            <S.ModalBlock>
                <S.ModalForm id="formLogUp" action="#">
                    <S.ModalLogo>
                        <img src="../img/logo_modal.png" alt="logo"></img>
                    </S.ModalLogo>
                    <S.SignUpInput type="text" name="login" id="loginReg" placeholder="email"></S.SignUpInput>
                    <S.SignUpInput type="password" name="password" id="passwordFirst" placeholder="Пароль"></S.SignUpInput>
                    <S.SignUpButton id="SignUpEnter"><a href="../index.html">Войти</a> </S.SignUpButton>
                    <S.SignUpButton id="SignUpEnter"><a href="../index.html">Зарегистрироваться</a> </S.SignUpButton>
                </S.ModalForm>
            </S.ModalBlock>
        </S.Container>
    </S.Wrapper>
    )
}