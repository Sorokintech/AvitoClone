import React, { useEffect, useState } from "react";
import * as S from "./style";
import {useGetAllAdsQuery, useGetAllUsersQuery} from "../../store/services";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {format } from "date-fns";
import ru from "date-fns/locale/ru";
import { currentItem } from "../../store/slices/article";

export const Items = () => {
    const {data, isSuccess, refetch} = useGetAllAdsQuery('');
    const {data: usersData, refetch: refetchUsers} = useGetAllUsersQuery();
    const user = useSelector((state) => state.user.id)
    const dateParse = (created_on) =>{
        const date = format(new Date (created_on), "PPPp", {locale: ru});
        return date;
      };
      const {title, price, description, created_on, user_id: approvedId, images} = useSelector(state => state.current ?? {});
      const path = "http://localhost:8090/";
      useEffect(() => {
            refetch();
            refetchUsers();
        }, [])

    return (
        <div>
            <S.Header>
                  Товары продавца
                        </S.Header>
                    <S.MainContent>
                        <S.Cards>
                            {data?.filter(({user_id}) => 
                            user_id === +user)
                            .map(({id, user_id, title, price, user, images, description, created_on }) => (                          
                            <S.CardsItem key={id}>
                                <S.Card>
                                    <S.CardImage>
                                    <NavLink to={`/article/${id}`} >
                                        {images[0] ? <img  src={`${path}${images[0]?.url}`} alt="NO_PICTURE_AVALIABLE"></img> : <img  src="img/image-dummy.png" alt="NO_PICTURE_AVALIABLE"></img>}
                                        </NavLink>
                                    </S.CardImage>
                                    <div>
                                        <NavLink to={`/article/${id}`}>
                                            <S.CardTitle>{title}</S.CardTitle>
                                        </NavLink>
                                        <S.CardPrice>{price} ₽</S.CardPrice>
                                        <S.CardPlace>{user.city}</S.CardPlace>
                                        <S.CardDate>{created_on ? dateParse(created_on) : 'Сегодня в 00:00'}</S.CardDate>
                                    </div>
                                </S.Card>
                            </S.CardsItem>
                            ))}
                            
                        </S.Cards>                        
                    </S.MainContent>
            </div>
    )
}