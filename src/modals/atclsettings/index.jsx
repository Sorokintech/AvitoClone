import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { modalSettings } from "../../store/slices/modal";
import { setCurrentArticle } from "../../store/slices/article";

import * as S from "./style";
import { useChangeAdMutation, useGetAllAdsQuery, useGetAdsQuery } from "../../store/services";

export const AtSettingsModal = React.forwardRef((props, ref) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  // const currentItem = useSelector((state) => state.current.id)
  // const { id } = location.state;

  const {title :adTitle, price: adPrice, user, description: adDescription, created_on, user_id, images, id} = useSelector(state => state.current ?? {});
  const {data: dataArticle, isSuccess: isSuccessFetchArticle} = useGetAdsQuery(id);
  const [title, setTitle] = useState(adTitle);
  const [price, setPrice] = useState(adPrice);
  const [description, setDescription] = useState();

  const closingModal = ()  => {
      dispatch(modalSettings(false));
  }
  const [changeAd, {data, isSuccess}] = useChangeAdMutation();
  const adChangeHandler = () => {
      changeAd({title, price, description, id})
      history('/article/:id');
  }

  useEffect(() => {
    if(isSuccess){
      dispatch(setCurrentArticle(data));
      dispatch(modalSettings(false));
    }
  }, [data, dispatch, isSuccess])
  const topBtnHandler = () => {
    history('/article/:id');
  }
  return (
    <>
    <S.Wrapper>
      <S.Container>
        <S.ModalBlock ref={ref}> {props.children}
          <S.ModalContent>
          <S.TopContainer>
            <S.GoBackButton onClick={topBtnHandler}>〱</S.GoBackButton>
            <S.ModalTitle>Редактировать объявление</S.ModalTitle>
            </S.TopContainer>
            <S.ModalCloseButton>
              <S.ModalCloseButtonLine onClick={closingModal}></S.ModalCloseButtonLine>
            </S.ModalCloseButton>
            <S.FormAdd>
              <S.FormBlock>
                <label for="name">Название</label>
                <S.FormInput
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></S.FormInput>
              </S.FormBlock>
              <S.FormBlock>
                <label for="text">Описание</label>
                <S.FormArea
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder={"Введите описание"}
                  onChange={(e) => setDescription(e.target.value)}
                >
                 {adDescription}
                </S.FormArea>
              </S.FormBlock>
              <S.FormBlock>
                <S.FormText>
                  Фотографии товара<span>не более 5 фотографий</span>
                </S.FormText>
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
                <S.FormPrice
                  type="text"
                  name="price"
                  id="formName"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></S.FormPrice>
                <S.FormPriceCover></S.FormPriceCover>
              </S.FormBlockPrice>

              <S.PublishButton id="btnPublish" onClick={adChangeHandler}>Сохранить</S.PublishButton>
            </S.FormAdd>
          </S.ModalContent>
        </S.ModalBlock>
      </S.Container>
    </S.Wrapper>
    </>
  );
});
