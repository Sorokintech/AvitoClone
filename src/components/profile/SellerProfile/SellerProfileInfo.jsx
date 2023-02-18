import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { currentUser } from "../../../store/slices/currentUser";
import { useDispatch } from "react-redux";
import { useGetAllUsersQuery } from "../../../store/services";

import * as S from "./style";

export const SellerProfile = () => {
  const history = useNavigate();
  const {data} = useGetAllUsersQuery();
  const [showNumber, setShowNumber] = useState(false);
  const location = useLocation();
  const { title, price, user, id, description, created_on, user_id } = location.state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser(user_id))
  }, [data])
  
  const path = "http://localhost:8090/";
  let fake_number = '';
  const setFakeNumber = () => {
    let hide =user.phone?.split('')
    let hide_array = [];
    hide?.forEach((element, index) => {
      if(index !== 0 && index !== 1 ) {
        element = '*';
        hide_array.push(element)
      } else {return hide_array.push(element)}
    })
    hide_array.splice(4, 0, ' ');
    hide_array.splice(8, 0, ' ');
    hide_array.splice(11, 0, ' ');
    fake_number = hide_array.join('');
  }
  setFakeNumber();
  const toggleNumber = () => {
      setShowNumber(!showNumber);
    } 

  const topBtnHandler = () => {
    history('/article/:id');
  }

  return (
    <div>
      <S.TopContainer>
        <S.GoBackButton onClick={topBtnHandler}>〱</S.GoBackButton>
        <S.Header>Профиль продавца</S.Header>
      </S.TopContainer>
      <S.Profile>
        <S.ProfileContent>
          <S.Seller>
            <S.SellerLeftBlock>
              <S.SellerImage>
                  <img src={`${path}${user.avatar}`} alt=""></img>
              </S.SellerImage>
            </S.SellerLeftBlock>
            <S.SellerRightBlock>
                <S.Title>{user.name}</S.Title>
                <S.City>{user.city}</S.City>
                <S.Info>Продает товары с августа 2021</S.Info>
                  <S.SellerShowButton onClick={toggleNumber}>
                    Показать телефон
                    <span>{!showNumber ? fake_number : user.phone}</span>
                  </S.SellerShowButton>
            </S.SellerRightBlock>
          </S.Seller>
        </S.ProfileContent>
      </S.Profile>
    </div>
  );
};
