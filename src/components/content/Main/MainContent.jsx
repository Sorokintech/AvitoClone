import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector} from "react-redux";
import {useGetAllAdsQuery,} from "../../../store/services";
import {format } from "date-fns";
import ru from "date-fns/locale/ru";
import * as S from "./style";

export const MainContent = () => {
  const searchTitle = useSelector((state) => state.search.searchValue);
  const {data, isSuccess, refetch} = useGetAllAdsQuery('');
  const path = "http://localhost:8090/"
  const dateParse = (created_on) =>{
    const date = format(new Date (created_on), "PPPp", {locale: ru});
    return date;
  }

  useEffect(() => {
    if(isSuccess) {
      refetch();
    }
  }, [isSuccess])
  
return (
    <S.Container>
      <S.Header>Объявления</S.Header>
      <S.MainContent>
        <S.Cards>
          {data
          ?.filter(({title}) => 
            title.toLocaleLowerCase().includes(searchTitle))
          .map(({ id, user_id, title, price, user, images, description, created_on }) => (
            <S.CardsItem key={id}>
              <S.Card>
                <S.CardImage>
                  <NavLink to={`/article/${id}`}>
                    {images[0] ? <img  src={`${path}${images[0]?.url}`} alt="NO_PICTURE_AVALIABLE"></img> : <img  src="img/image-dummy.png" alt="NO_PICTURE_AVALIABLE"></img>}
                  </NavLink>
                </S.CardImage>
                <div>
                  <S.CardTitle ><NavLink to={`/article/${id}`}>{title}</NavLink></S.CardTitle> 
                  <S.CardPrice>{price} ₽</S.CardPrice>
                  <S.CardPlace>{user.city}</S.CardPlace>
                  <S.CardDate>{created_on ? dateParse(created_on) : 'Сегодня в 00:01'}</S.CardDate>
                </div>
              </S.Card>
            </S.CardsItem>
          ))}
        </S.Cards>
      </S.MainContent>
    </S.Container>
  );
};
