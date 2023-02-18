import React, { useState, useRef, useEffect } from "react";
import { SignUpModal } from "../../modals/sign-up/index";
import * as S from "./style";
import { useChangeAvatarMutation, useGetAllUsersQuery, useGetCurrentUserQuery, useSignInMutation } from "../../store/services";
import { setLogin, setToken, signInActive, signUpActive } from "../../store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export const SignInModal = React.forwardRef((props, ref) => {
  const history = useNavigate();
  const initialValues = {email: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const [local, setLocal] = useState(false);
  const [getToken, {data: token, isSuccess: isSuccessGetToken, isError : isErrorGetToken}] = useSignInMutation();
  const {data, isSuccess : isSuccessGetCurrentUser, refetch} = useGetCurrentUserQuery();
  const modalSignInActive = useSelector((state) => state.auth.signInActive)
  const modalSignUpActive = useSelector((state) => state.auth.signUpActive)
  const toggleModal = (e) => {
    e.preventDefault();
    if(local) {
      history('/sign_up')
    } else
    dispatch(signInActive(false))
    dispatch(signUpActive(true))
    document.body.style.overflow = 'hidden';

  }
  let currentLocation = window.location.pathname;
  const locationCheck = () => {
    if(currentLocation === '/sign_in') {
      setLocal(true)
    } 
  } 
  useEffect(() => {
    if(isSuccessGetToken) {
      dispatch(setToken(token?.access_token))
      document.cookie = `tokenRefresh=${token?.refresh_token}`;
      document.cookie = `tokenAccess=${token?.access_token}`;
      refetch();
    }
  }, [isSuccessGetToken, token])  
  useEffect(() => {
    if(isSuccessGetCurrentUser) {
      document.cookie = `username=${data?.email}`;
      document.cookie = `id=${data?.id}`
      dispatch(setLogin(data));
    } 
  }, [isSuccessGetCurrentUser, data]);
  useEffect(() => {
    dispatch(signUpActive(false));
    locationCheck();
  }, [])
  const handleChange =(e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true);
  }
  useEffect(() => {
    if(isErrorGetToken) {
    toast.error('Пользователь не найден, пожалуйста, проверьте данные', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    }
  }, [isErrorGetToken])
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
    }
    return errors;
  };
  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      getToken(formValues)
    } 
  }, [formErrors])
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.ModalBlock ref={ref}> {props.children}
            <S.ModalForm>
              <S.ModalLogo src="/img/logo_modal.png"></S.ModalLogo>
              <S.SignUpInput
                type="text"
                name="email"
                id="loginReg"
                placeholder="email"
                autoComplete="off"
                defaultValue={formValues?.email}
                onChange={handleChange}
              ></S.SignUpInput>
              <S.ErrorForm>{formErrors.email}</S.ErrorForm>
              <S.SignUpInput
                type="password"
                name="password" 
                id="passwordFirst"
                placeholder="Пароль"
                autoComplete="off"
                defaultValue={formValues?.password}
                onChange={handleChange}
              ></S.SignUpInput>
              <S.ErrorForm>{formErrors.password}</S.ErrorForm>
              <S.EnterButton id="SignUpEnter" onClick={handleSubmit}>Войти</S.EnterButton>
                <S.SignUpButton onClick={toggleModal}>Зарегистрироваться</S.SignUpButton>
                {modalSignUpActive && <SignUpModal ref={ref}/>}
            </S.ModalForm>
          </S.ModalBlock>
        </S.Container>
        <ToastContainer
            position="top-center"
            autoClose={1000}  
            limit={1}
            transition={Flip}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
      </S.Wrapper>
    </>
  );
});


