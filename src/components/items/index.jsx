import React from "react";
import * as S from "./style";


export const Items = () => {

    return (
        <div>
            <S.Header>
                  Мои товары
                        </S.Header>
                    <S.MainContent>
                        <S.Cards>                            
                            <S.CardsItem>
                                <S.Card>
                                    <S.CardImage>
                                        <a href="" target="_blank">
                                            <img src="#" alt=""></img>
                                        </a>
                                    </S.CardImage>
                                    <div>
                                        <a href="" target="_blank">
                                            <S.CardTitle>Ракетка для большого тенниса Triumph Pro ST</S.CardTitle>
                                        </a>
                                        <S.CardPrice>2&nbsp;200&nbsp;₽</S.CardPrice>
                                        <S.CardPlace>Санкт Петербург</S.CardPlace>
                                        <S.CardDate>Сегодня в&nbsp;10:45</S.CardDate>
                                    </div>
                                </S.Card>
                            </S.CardsItem>

                             


                        </S.Cards>                        
                    </S.MainContent>
            </div>
    )
}