import * as S from "./style";

export const ReviewsModal = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>Редактировать объявление</S.ModalTitle>
            <S.ModalCloseButton>
              <S.ModalCloseButtonLine></S.ModalCloseButtonLine>
            </S.ModalCloseButton>
            <S.FormAdd id="formNewArt" action="#">
              <S.FormBlock>
                <label for="text">Добавить отзыв</label>
                <S.FormArea
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="5"
                  placeholder="Введите описание"
                ></S.FormArea>
              </S.FormBlock>
              <S.PublishButton id="btnPublish">Опубликовать</S.PublishButton>
            </S.FormAdd>

            <S.ModalReviews>
              <S.Review>
                <S.ReviewItem>
                  <S.ReviewLeftBlock>
                    <S.ReviewImage>
                      <img src="" alt=""></img>
                    </S.ReviewImage>
                  </S.ReviewLeftBlock>
                  <S.ReviewRightBlock>
                    <S.ReviewName>
                      Олег <span>14 августа</span>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </S.ReviewText>
                  </S.ReviewRightBlock>
                </S.ReviewItem>
              </S.Review>

              <S.Review>
                <S.ReviewItem>
                  <S.ReviewLeftBlock>
                    <S.ReviewImage>
                      <img src="" alt=""></img>
                    </S.ReviewImage>
                  </S.ReviewLeftBlock>
                  <S.ReviewRightBlock>
                    <S.ReviewName>
                      Олег <span>14 августа</span>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </S.ReviewText>
                  </S.ReviewRightBlock>
                </S.ReviewItem>
              </S.Review>

              <S.Review>
                <S.ReviewItem>
                  <S.ReviewLeftBlock>
                    <S.ReviewImage>
                      <img src="" alt=""></img>
                    </S.ReviewImage>
                  </S.ReviewLeftBlock>
                  <S.ReviewRightBlock>
                    <S.ReviewName>
                      Олег <span>14 августа</span>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </S.ReviewText>
                  </S.ReviewRightBlock>
                </S.ReviewItem>
              </S.Review>

              <S.Review>
                <S.ReviewItem>
                  <S.ReviewLeftBlock>
                    <S.ReviewImage>
                      <img src="" alt=""></img>
                    </S.ReviewImage>
                  </S.ReviewLeftBlock>
                  <S.ReviewRightBlock>
                    <S.ReviewName>
                      Олег <span>14 августа</span>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </S.ReviewText>
                  </S.ReviewRightBlock>
                </S.ReviewItem>
              </S.Review>

              <S.Review>
                <S.ReviewItem>
                  <S.ReviewLeftBlock>
                    <S.ReviewImage>
                      <img src="" alt=""></img>
                    </S.ReviewImage>
                  </S.ReviewLeftBlock>
                  <S.ReviewRightBlock>
                    <S.ReviewName>
                      Олег <span>14 августа</span>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </S.ReviewText>
                  </S.ReviewRightBlock>
                </S.ReviewItem>
              </S.Review>
            </S.ModalReviews>
          </S.ModalContent>
        </S.ModalBlock>
      </S.Container>
    </S.Wrapper>
  );
};
