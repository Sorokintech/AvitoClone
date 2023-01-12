import React from "react";
import * as S from "./style";

export const SellerProfile = () => {
  return (
    <div>
      <S.Header>Профиль продавца</S.Header>

      <S.Profile>
        <S.ProfileContent>
          <S.Seller>
            <S.SellerLeftBlock>
              <S.SellerImage>
                <a href="" target="_self">
                  <img src="#" alt=""></img>
                </a>
              </S.SellerImage>
            </S.SellerLeftBlock>
            <S.SellerRightBlock>
              <S.Title>Кирилл Матвеев</S.Title>
              <S.City>Санкт-Петербург</S.City>
              <S.Info>Продает товары с августа 2021</S.Info>

              <S.SellerMobBlock>
                <S.SellerImageMob>
                  <a href="" target="_self">
                    <img src="#" alt=""></img>
                  </a>
                </S.SellerImageMob>
              </S.SellerMobBlock>

              <S.SellerShowButton>
                Показать&nbsp;телефон
                <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
              </S.SellerShowButton>
            </S.SellerRightBlock>
          </S.Seller>
        </S.ProfileContent>
      </S.Profile>
    </div>
  );
};
