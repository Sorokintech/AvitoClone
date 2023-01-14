import React from "react";
import * as S from "./style";

export const AddNewModal = React.forwardRef((props, ref) => {
    return(
        <>
        <S.Wrapper>
        <S.Container>
            <S.ModalBlock ref={ref}>{props.children}
                <S.ModalContent>
                    <S.ModalTitle>Новое объявление</S.ModalTitle>
                    <S.ModalCloseButton>
                        <S.ModalCloseButtonLine></S.ModalCloseButtonLine>
                    </S.ModalCloseButton>
                    <S.FormAdd id="formNewArt" action="#">
                        <S.FormBlock>
                            <label for="name">Название</label>
                            <S.FormInput type="text" name="name" id="formName" placeholder="Введите название"   autoComplete="off" ></S.FormInput>
                        </S.FormBlock>
                        <S.FormBlock>
                            <label for="text">Описание</label>                            
                            <S.FormArea name="text" id="formArea" cols="auto" rows="10" placeholder="Введите описание"   autoComplete="off"></S.FormArea>
                        </S.FormBlock>
                        <S.FormBlock>
                            <S.FormText>Фотографии товара<span>не более 5 фотографий</span></S.FormText>
                            <S.FormImageBlock>
                                <S.FormImage>
                                    <img src="" alt=""></img>
                                    <S.FormImageCover></S.FormImageCover>                                    
                                </S.FormImage>
                                <S.FormImage>
                                    <img src="" alt=""></img>
                                    <S.FormImageCover></S.FormImageCover>                                    
                                </S.FormImage>
                                <S.FormImage>
                                    <img src="" alt=""></img>
                                    <S.FormImageCover></S.FormImageCover>                                    
                                </S.FormImage>
                                <S.FormImage>
                                    <img src="" alt=""></img>
                                    <S.FormImageCover></S.FormImageCover>                                    
                                </S.FormImage>
                                <S.FormImage>
                                    <img src="" alt=""></img>
                                    <S.FormImageCover></S.FormImageCover>                                    
                                </S.FormImage>
                            </S.FormImageBlock>
                        </S.FormBlock>
                        <S.FormBlockPrice>
                            <label for="price">Цена</label>
                            <S.FormPrice type="text" name="price" id="formName"   autoComplete="off"></S.FormPrice>
                            <S.FormPriceCover></S.FormPriceCover>
                        </S.FormBlockPrice> 
                       
                        <S.PublishButton id="btnPublish">Опубликовать</S.PublishButton>
                        
                    </S.FormAdd>
                </S.ModalContent>
            </S.ModalBlock>
        </S.Container>
    </S.Wrapper>
    </>
    );
});