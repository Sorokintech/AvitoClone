import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetAllUsersQuery, useSignInMutation, useSignUpMutation } from "../../store/services";
import { setLogin, setToken, signUpActive } from "../../store/slices/auth";
import * as S from "./style";

export const SignUpModal = React.forwardRef((props, ref) => {
  const history = useNavigate();
  const {data: allusers} = useGetAllUsersQuery();
  const initialValues = {email: "", password: "", name: "", surname: "", city: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [signUp, {data, isSuccess: isSuccessSignUp}] = useSignUpMutation();
  const [getToken, {data: token, isSuccess: isSuccessGetToken}] = useSignInMutation();
  const [passwordRepeat, setPasswordRepeat] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if(isSuccessSignUp) {
      getToken(formValues);
    }
  }, [isSuccessSignUp]);
  useEffect(() => {
    if(isSuccessGetToken) {
      document.cookie = `username=${data?.email}`;
      document.cookie = `id=${data?.id}`
      dispatch(setToken(token?.access_token))
      document.cookie = `tokenRefresh=${token?.refresh_token}`;
      document.cookie = `tokenAccess=${token?.access_token}`;
      dispatch(setLogin(data));
      history('/');
    }
  }, [isSuccessGetToken, data, token])  
  // function signingUp (e) {
  //   e.preventDefault();
  //   signUp({email, username:email, password})
  // }
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
  useOnClickOutside(ref, () => dispatch(signUpActive(false)));
  const handleChange =(e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true);
  }
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Пожалуйста, введите email";
    } else if (!regex.test(values.email)) {
      errors.email = "Неверный формат";
    }
    if (!values.password) {
      errors.password = "Пожалуйста, введите пароль";
    } else if (values.password.length < 4) {
      errors.password = "Пароль должен быть более 4 символов";
    } else if (values.password.length > 10) {
      errors.password = "Пароль должен быть менее 10 символов";
    } else if(values.password !== passwordRepeat) {
      errors.passwordRepeat = "Пароли не совпадают"
    }
    return errors;
  };
  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      signUp(formValues)
    } 
  }, [formErrors])
  
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.ModalBlock ref={ref}> {props.children}
            <S.ModalForm>
              <S.ModalLogo src="/img/logo_modal.png">
              </S.ModalLogo>
              <S.SignUpInput
                type="text"
                name="email"
                id="loginReg"
                placeholder="email"
                autoComplete="off"
                defaultValue={formValues?.email}
                onChange={handleChange}
              ></S.SignUpInput>
              <S.ErrorForm>{formErrors?.email}</S.ErrorForm>
              <S.SignUpInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                autoComplete="off"
                defaultValue={formValues?.password}
                onChange={handleChange}
              ></S.SignUpInput>
              <S.ErrorForm>{formErrors?.password}</S.ErrorForm>
              <S.SignUpInput
                type="password"
                name="passwordRepeat"
                id="passwordSecond"
                placeholder="Повторите пароль"
                autoComplete="off"
                defaultValue={passwordRepeat}
                onChange={(e) => setPasswordRepeat(e.target.value)}
              ></S.SignUpInput>
              <S.ErrorForm>{formErrors?.passwordRepeat}</S.ErrorForm>
              <S.SignUpInput
                type="text"
                name="name"
                id="name"
                placeholder="Имя (необязательно)"
                autoComplete="off"
                onChange={handleChange}
                defaultValue={formValues?.name}
              ></S.SignUpInput>
              <S.SignUpInput
                type="text"
                name="surname"
                id="surname"
                placeholder="Фамилия (необязательно)"
                autoComplete="off"
                onChange={handleChange}
                defaultValue={formValues?.surname}
              ></S.SignUpInput>
              <S.SignUpInput
                type="text"
                name="city"
                id="city"
                placeholder="Город (необязательно)"
                autoComplete="off"
                onChange={handleChange}
                defaultValue={formValues?.city}
              ></S.SignUpInput>
              <S.SignUpButton onClick={handleSubmit}>
                Зарегистрироваться
              </S.SignUpButton>
            </S.ModalForm>
          </S.ModalBlock>
        </S.Container>
      </S.Wrapper>
    </>
  );
});

// <>
// <S.Wrapper>
//   <S.Container>
//     <S.ModalBlock ref={ref}> {props.children}
//       <S.ModalForm>
//         <S.ModalLogo src="/img/logo_modal.png">
//         </S.ModalLogo>
//         <S.SignUpInput
//           type="text"
//           name="login"
//           id="loginReg"
//           placeholder="email"
//           autoComplete="off"
//           defaultValue={email}
//           onChange={(e) => setEmail(e.target.value)}
//         ></S.SignUpInput>
//         <S.SignUpInput
//           type="password"
//           name="password"
//           id="passwordFirst"
//           placeholder="Пароль"
//           autoComplete="off"
//           defaultValue={password}
//           onChange={(e) => setPassword(e.target.value)}
//         ></S.SignUpInput>
//         <S.SignUpInput
//           type="password"
//           name="password"
//           id="passwordSecond"
//           placeholder="Повторите пароль"
//           autoComplete="off"
//         ></S.SignUpInput>
//         <S.SignUpInput
//           type="text"
//           name="first-name"
//           id="first-name"
//           placeholder="Имя (необязательно)"
//           autoComplete="off"
//         ></S.SignUpInput>
//         <S.SignUpInput
//           type="text"
//           name="first-last"
//           id="first-last"
//           placeholder="Фамилия (необязательно)"
//           autoComplete="off"
//         ></S.SignUpInput>
//         <S.SignUpInput
//           type="text"
//           name="city"
//           id="city"
//           placeholder="Город (необязательно)"
//           autoComplete="off"
//         ></S.SignUpInput>
//         <S.SignUpButton onClick={signingUp}>
//           Зарегистрироваться
//         </S.SignUpButton>
//       </S.ModalForm>
//     </S.ModalBlock>
//   </S.Container>
// </S.Wrapper>
// </>
// );
// });
