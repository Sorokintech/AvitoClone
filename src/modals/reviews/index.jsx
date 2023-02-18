import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { modalReview } from "../../store/slices/modal";
import { useAddCommentMutation, useGetAllCommentsQuery, useGetAllUsersQuery } from "../../store/services";
import {format } from "date-fns";
import ru from "date-fns/locale/ru";
import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as S from "./style";

export const ReviewsModal = React.forwardRef((props, ref) => {
  const history = useNavigate();
  const location = useLocation();
  const { data, refetch } = useGetAllCommentsQuery(); 
  const path = "http://localhost:8090/"
  const currentAd = useSelector((state) => state.current.id)
  const [addComment, {data: newCommentData, isSuccess}] = useAddCommentMutation(currentAd);
  const {data: usersData} = useGetAllUsersQuery();
  const userSearch = (author_id) => {
      return usersData?.find((user) => user.id === author_id)
  };
  
  const [comment, setComment] = useState();

const dispatch = useDispatch();
  const closingModal = ()  => {
      dispatch(modalReview(false));
  }
  const userIsLogged = useSelector((state) => state.auth.isLogin)
  function addCommentHandler (e) {
    e.preventDefault();
    addComment({text: comment, id: currentAd});
  }
  useEffect(() => {
    if(isSuccess) {
      refetch();
    }
  }, [isSuccess])
  const dateParse = (created_on) =>{
    const date = format(new Date (created_on), "PPP", {locale: ru});
    return date;
  };

  const findHandler = (e) => {
    e.preventDefault();
    toast.info('Чтобы оставить отзыв, пожалуйста, авторизуйтесь', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    };
    const topBtnHandler = () => {
      history('/article/:id');
    }
    const {title, price, user, description, created_on, user_id, images} = useSelector(state => state.current ?? {});
  return (
    <>  
    <S.Wrapper>
      <S.Container>
        <S.ModalBlock ref={ref}>  {props.children}
          <S.ModalContent >
            <S.TopContainer>
              <S.GoBackButton onClick={topBtnHandler}>〱</S.GoBackButton>
              <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
            </S.TopContainer>
            <S.ModalCloseButton>
              <S.ModalCloseButtonLine onClick={closingModal}>
              </S.ModalCloseButtonLine>
            </S.ModalCloseButton>
            <S.FormAdd>
              <S.FormBlock>
                <S.titleLabel htmlFor="text">Добавить отзыв</S.titleLabel>
                <S.FormArea
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="5"
                  placeholder="Введите описание"
                  onChange={(e) => setComment(e.target.value)}
                ></S.FormArea>
              </S.FormBlock>
              {userIsLogged ? <S.PublishButton id="btnPublish" onClick={addCommentHandler}>Опубликовать</S.PublishButton> : <S.PublishButton id="btnPublish" onClick={findHandler}>Опубликовать</S.PublishButton>}
            </S.FormAdd>
            <S.ModalReviews>
            {
              data?.filter(({ad_id}) =>
              ad_id === +currentAd)
              .map(({id, created_on, text, author_id, ad_id}) => (
              <S.Review key={id}>
                <S.ReviewItem  >
                  <S.ReviewLeftBlock>
                    <S.ReviewImage>
                      <img src={`${path}${userSearch(author_id)?.avatar}`} alt=""></img>
                    </S.ReviewImage>
                  </S.ReviewLeftBlock>
                  <S.ReviewRightBlock>
                    <S.ReviewName>
                     {userSearch(author_id)?.name}  <span>{created_on ? dateParse(created_on) : 'Сегодня в 00:01'}</span>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>
                      {text}
                    </S.ReviewText>
                  </S.ReviewRightBlock>
                </S.ReviewItem>
              </S.Review>
             ))}
            </S.ModalReviews>

          </S.ModalContent>
        </S.ModalBlock>
      </S.Container>
      <ToastContainer
            position="top-center"
            transition={Flip}
            autoClose={1000}
            limit={1}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
    </S.Wrapper>
    </>
  );
});
