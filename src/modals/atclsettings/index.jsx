import React from "react";
import * as S from "./style";

export const AtSettingsModal = React.forwardRef((props, ref) => {
  return (
    <>
    <S.Wrapper>
      <S.Container>
        <S.ModalBlock ref={ref}> {props.children}
          <S.ModalContent>
            <S.ModalTitle>Редактировать объявление</S.ModalTitle>
            <S.ModalCloseButton>
              <S.ModalCloseButtonLine></S.ModalCloseButtonLine>
            </S.ModalCloseButton>
            <S.FormAdd>
              <S.FormBlock>
                <label for="name">Название</label>
                <S.FormInput
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                  value="Ракетка для большого тенниса Triumph Pro STС Б/У"
                ></S.FormInput>
              </S.FormBlock>
              <S.FormBlock>
                <label for="text">Описание</label>
                <S.FormArea
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
                  value="2 200"
                ></S.FormPrice>
                <S.FormPriceCover></S.FormPriceCover>
              </S.FormBlockPrice>

              <S.PublishButton id="btnPublish">Сохранить</S.PublishButton>
            </S.FormAdd>
          </S.ModalContent>
        </S.ModalBlock>
      </S.Container>
    </S.Wrapper>
    </>
  );
});
