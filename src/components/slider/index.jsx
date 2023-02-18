import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import * as S from "./style";

export const ImageSlider = ({props}) => {
    const path = "http://localhost:8090/"
    const [currentIndex, setCurrentIndex] = useState(0)
    const goToPrevious = () => {
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? props.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isLast = currentIndex === props.length - 1
        const newIndex = isLast ? 0 : currentIndex + 1 
        setCurrentIndex(newIndex)
    }
    return(
            <S.ArticleLeftBlock>
                <S.ArticleFillImg>
                    <S.ArticleImage>
                    
                    {props?.[0] ? <S.ChildrenImage src={`${path}${props[currentIndex]?.url}`}>
                    </S.ChildrenImage> : <S.ChildrenImage  src="/img/image-dummy.png" alt="NO_PICTURE_AVALIABLE"></S.ChildrenImage>}
                    {props?.[1]  ? <S.LeftArrow onClick={goToPrevious}>﹤</S.LeftArrow>  : ''}
                    {props?.[1]  ? <S.RightArrow onClick={goToNext}>﹥</S.RightArrow>  : ''}
                    </S.ArticleImage>
                </S.ArticleFillImg>
            </S.ArticleLeftBlock>
    )};