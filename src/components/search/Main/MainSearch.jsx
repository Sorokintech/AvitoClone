import React from "react";
import { useDispatch } from "react-redux";
import { search } from "../../../store/slices/search";
import * as S from "./style";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { NavLink, useNavigate } from "react-router-dom";

export const MainSearch = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    dispatch(search((e.target).value));
  };

  const findHandler = (e) => {
    e.preventDefault();
    toast.info('Пожалуйста, используйте строку поиска', {
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
  const navButton = (e) => {
    e.preventDefault();
    history('/');
  }

  return (
    <S.Search>
      <S.SearchLogoLink href="#" target="_blank">
      <S.SearchLogoImg src="img/logo.png" alt="logo" onClick={navButton}></S.SearchLogoImg>
      </S.SearchLogoLink>
      <S.SearchLogoLinkMob href="#" target="_blank">
        <S.SearchLogoMobLink
          src="img/logo-mob.png"
          alt="logo"
        ></S.SearchLogoMobLink>
      </S.SearchLogoLinkMob>
      <S.SearchForm action="#">
        <S.SearchText
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
          autoComplete="off"
          onChange={onChangeHandler}
        ></S.SearchText>
        <S.SearchTextMob
          type="search"
          placeholder="Поиск"
          name="search-mob"
        ></S.SearchTextMob>
        <S.Button onClick={findHandler}>Найти</S.Button>
      </S.SearchForm>
      <div>
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
        </div> 
        {/* Див выше нужно сделать обязательно в мобильной версии display:none */}
    </S.Search>
    
  );
};
