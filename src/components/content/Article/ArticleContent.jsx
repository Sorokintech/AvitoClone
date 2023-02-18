import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { AtSettingsModal } from "../../../modals/atclsettings";
import { ReviewsModal } from "../../../modals/reviews";
import { useDeleteAdByIdMutation, useGetAllAdsQuery, useGetAllCommentsQuery, useGetAdsQuery } from "../../../store/services";
import { currentItem, setCurrentArticle } from "../../../store/slices/article";
import { currentUser } from "../../../store/slices/currentUser";
import { modalReview } from "../../../store/slices/modal";
import { modalSettings } from "../../../store/slices/modal";
import {format } from "date-fns";
import * as S from "./style";
import ru from "date-fns/locale/ru";
import { ImageSlider } from "../../slider/index.jsx";

export const ArticleContent = ({id}) => {
  const history = useNavigate();
  const location = useLocation();
  const modalReviewIsShown = useSelector((state) => state.modal.modalReviewIsShown)
  const modalSettingsIsShown = useSelector((state) => state.modal.modalSettingsIsShown)
  // const { id } = location.state; 
  const {title, price, user, description, created_on, user_id, images} = useSelector(state => state.current ?? {});
  const {data: dataArticle, isSuccess: isSuccessFetchArticle} = useGetAdsQuery(id);

  const [deleteAd, {data: deleteAdData, isSuccess : deleteSuccess, refetch}] = useDeleteAdByIdMutation();
  const [showNumber, setShowNumber] = useState(false);
  const [logged, setLogged] = useState(false)
  const { data } = useGetAllCommentsQuery();
  const dispatch = useDispatch();
  const path = "http://localhost:8090/"
  const {data: allAds} = useGetAllAdsQuery();
  const currentUserId = useSelector((state) => state.auth.id)
  const userCheck = () => {
    if( user_id === +currentUserId) {
      return setLogged(true)
     } else {setLogged(false)}
  };
  function deleteAdHandler () {
    deleteAd(id); 
}

useEffect(() => {
  if (isSuccessFetchArticle) {
    dispatch(setCurrentArticle(dataArticle))
  }
}, [isSuccessFetchArticle, dataArticle]);

useEffect(() => {
  if(deleteSuccess) {
    history('/');
  }
}, [deleteSuccess, data])  


  const [review, setReview] = useState(0);
  useEffect(() => {
    setReview(data?.filter(({ad_id}) => ad_id === +id).length) 
    userCheck();
  }, [data, user_id])
 

  const dateParse = () =>{
    const date = format(new Date(created_on ?? Date.now()), "PPPp", {locale: ru});
    return date;
  };
  useEffect(() => {
    dispatch(currentItem(id));
  }, [data])


  const ref = useRef();
  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
          document.body.style.removeProperty('overflow'); 
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
  }
  useOnClickOutside(ref, () => dispatch(modalReview(false), dispatch(modalSettings(false))));
  const toggleModalReview = () => {
    dispatch(modalReview(true));
    document.body.style.overflow = 'hidden';
  };
  const toggleModalSettings = () => {
    dispatch(modalSettings(true));
    document.body.style.overflow = 'hidden';
  };
  let fake_number = '';
  const setFakeNumber = () => {
    let hide =user?.phone?.split('')
    let hide_array = [];
    hide?.forEach((element, index) => {
      if(index !== 0 && index !== 1 ) {
        element = '*';
        hide_array.push(element)
      } else {return hide_array.push(element)}
    })
    hide_array.splice(4, 0, ' ');
    hide_array.splice(8, 0, ' ');
    hide_array.splice(11, 0, ' ');
    fake_number = hide_array.join('');
  }
  setFakeNumber();
  const toggleNumber = () => {
      setShowNumber(!showNumber);
    } 
    const mediaQuery = window.matchMedia('(max-width: 767px)')

  const reviewCount = (review) => {
    if(review >= 11 && review <= 14) {
      return 'отзывов'
    }
      switch (review%10) {
      case 2:
      case 3:
      case 4:
        return 'отзыва'
      case 1:
        return 'отзыв'
      default :
        return 'отзывов'
    }
  }
  const settingCurrentUser =() => {
    dispatch(currentUser(user_id))
  }


  return (
    <S.Main>
      <S.ArticleContainer>
        <S.ArticleContent>
        <ImageSlider props={images}/>
          <S.ArticleRightBlock>
            <S.RightBlockContent>
              <S.ArticleTitle>
                {title}
              </S.ArticleTitle>
              <S.ArticleInfo>
                {/* <S.ArticleDate>{created_on ? data_parsing(created_on) : 'Сегодня в 00:01'}</S.ArticleDate> */}
                <S.ArticleDate>{dateParse()}</S.ArticleDate>
                <S.ArticleCity>{user?.city}</S.ArticleCity>
                {!mediaQuery.matches ? <S.ArticleLink onClick={toggleModalReview}>
                  {review} {reviewCount(review)}
                </S.ArticleLink> : <S.ArticleLink onClick={() => history('/reviews')}>
                  {review} {reviewCount(review)}
                </S.ArticleLink>}
                {/* <S.ArticleLink onClick={toggleModalReview}>
                  {review} {reviewCount(review)}
                </S.ArticleLink> */}
                {modalReviewIsShown && (
                  <>
                  <ReviewsModal ref={ref} props={id}/>
                  </>
                )}
              </S.ArticleInfo>
              <S.ArticlePrice>{price} ₽</S.ArticlePrice>  
              {!logged ? <S.ArticleButton onClick={toggleNumber}>
                Показать телефон 
                <span>{!showNumber ? fake_number : user.phone}</span>
              </S.ArticleButton>
              :
              <S.ButtonsDiv>
                {!mediaQuery.matches ? <S.ArticleButton onClick={toggleModalSettings}> 
                  Редактировать
                </S.ArticleButton> : <S.ArticleButton onClick={() => history('/ad_settings')}> 
                  Редактировать
                </S.ArticleButton>}
                {modalSettingsIsShown &&(
                    <>
                    <AtSettingsModal ref={ref} state={{title, price, user, id, description, created_on, user_id}}/>
                    </>
                  )}
                <S.ArticleButton onClick={deleteAdHandler}>
                  Снять с публикации
                </S.ArticleButton>
               </S.ButtonsDiv>}
              <S.ArticleAuthor>
                <S.AuthorImage>
                    <img src={`${path}${user?.avatar}`} alt=""></img>
                </S.AuthorImage>
                <S.AuthorContent>
                  <S.AuthorName onClick={settingCurrentUser}>{!logged ? <NavLink to={'/seller'} state={{title, price, user, id, description, created_on, user_id}}>{user?.name}</NavLink> : <NavLink to={'/profile'} state={{title, price, user, id, description, created_on, user_id}}>{user?.name}</NavLink>}</S.AuthorName>
                  <S.AuthorAbout>Продает товары с августа 2021</S.AuthorAbout>
                </S.AuthorContent>
              </S.ArticleAuthor>
            </S.RightBlockContent>
          </S.ArticleRightBlock> 
        </S.ArticleContent>
      </S.ArticleContainer>

      <S.DescriptionContainer>
        <S.DescriptionContainerTitle>
          Описание товара
        </S.DescriptionContainerTitle>
        <S.DescriptionContent>
          <S.DescriptionText>
            {description ? description : 'Описание товара отсутствует'}
          </S.DescriptionText>
        </S.DescriptionContent>
      </S.DescriptionContainer>
    </S.Main>
  );
};
