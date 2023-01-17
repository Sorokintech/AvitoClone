import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { items } from "../../../global/data";
import * as S from "./style";

export const MainContent = () => {
  const trackTitle = useSelector((state) => state.search.searchValue);

  return (
    <S.Container>
      <S.Header>Объявления</S.Header>
      <S.MainContent>
        <S.Cards>
          {items?.filter(({name}) => 
            name.toLocaleLowerCase().includes(trackTitle))
          
          .map(({ key, name, price, city, date, picture }) => (
            <S.CardsItem key={key}>
              <S.Card>
                <S.CardImage>
                  <NavLink to={"/article"}>
                    <img src={picture} alt="dog"></img>
                  </NavLink>
                </S.CardImage>
                <div>
                  <S.CardTitle>{name}</S.CardTitle>
                  <S.CardPrice>{price}</S.CardPrice>
                  <S.CardPlace>{city}</S.CardPlace>
                  <S.CardDate>{date}</S.CardDate>
                </div>
              </S.Card>
            </S.CardsItem>
          ))}
          {/* {Array.from(new Array(20)).map((_, key) => (
            <S.CardsItem key={key}>
                              <S.Card>
                                <S.CardImage>
                                <NavLink to={'/article'}>
                                    <img src="" alt=""></img>
                                    </NavLink>
                                </S.CardImage>
                                <div>
                                    <S.CardTitle>
                                    Ракетка для большого тенниса Triumph Pro ST
                                    </S.CardTitle>
                                  <S.CardPrice>2&nbsp;200&nbsp;₽</S.CardPrice>
                                  <S.CardPlace>Санкт Петербург</S.CardPlace>
                                  <S.CardDate>Сегодня в&nbsp;10:45</S.CardDate>
                                </div>
                              </S.Card>
                            </S.CardsItem>

          ))} */}
        </S.Cards>
      </S.MainContent>
    </S.Container>
  );
};
