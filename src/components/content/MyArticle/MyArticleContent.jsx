import React, {useState, useRef, useEffect} from 'react';
import { AtSettingsModal } from '../../../modals/atclsettings';
import * as S from "./style";

export const MyArticleContent = () => {

  const [modal, setModal] = useState(false);
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
  useOnClickOutside(ref, () => setModal(false));
  const toggleModal = () => {
    setModal(!modal)
    document.body.style.overflow = 'hidden';
  }
  return (
    <S.Main>
      <S.ArticleContainer>
        <S.ArticleContent>
          <S.ArticleLeftBlock>
            <S.ArticleFillImg>
              <S.ArticleImage>
                <S.ChildrenImage src="" alt=""></S.ChildrenImage>
              </S.ArticleImage>
              <S.ArticleImageBar>
                <S.BarImageDiv>
                  <img src="" alt=""></img>
                </S.BarImageDiv>
                <S.BarImageDiv>
                  <img src="" alt=""></img>
                </S.BarImageDiv>
                <S.BarImageDiv>
                  <img src="" alt=""></img>
                </S.BarImageDiv>
                <S.BarImageDiv>
                  <img src="" alt=""></img>
                </S.BarImageDiv>
                <S.BarImageDiv>
                  <img src="" alt=""></img>
                </S.BarImageDiv>
                <S.BarImageDiv>
                  <img src="" alt=""></img>
                </S.BarImageDiv>
              </S.ArticleImageBar>
              <S.BarMob>
                <S.BarImageDiv></S.BarImageDiv>
                <S.BarImageDiv></S.BarImageDiv>
                <S.BarImageDiv></S.BarImageDiv>
                <S.BarImageDiv></S.BarImageDiv>
                <S.BarImageDiv></S.BarImageDiv>
              </S.BarMob>
            </S.ArticleFillImg>
          </S.ArticleLeftBlock>
          <S.ArticleRightBlock>
            <S.RightBlockContent>
              <S.ArticleTitle>
                ?????????????? ?????? ???????????????? ?????????????? Triumph Pro ST?? ??/??
              </S.ArticleTitle>
              <S.ArticleInfo>
                <S.ArticleDate>?????????????? ?? 10:45</S.ArticleDate>
                <S.ArticleCity>??????????-??????????????????</S.ArticleCity>
                <S.ArticleLink>
                  4 ????????????
                </S.ArticleLink>
              </S.ArticleInfo>
              <S.ArticlePrice>2 200 ???</S.ArticlePrice>
              <S.ButtonBlock>
                <S.EditButton onClick={toggleModal}>??????????????????????????</S.EditButton>
                {modal && (<AtSettingsModal ref={ref}/>)}
                <S.RemoveButton>?????????? ?? ????????????????????</S.RemoveButton>
              </S.ButtonBlock>

              <S.ArticleAuthor>
                <S.AuthorImage> 
                  <img src="" alt=""></img>
                </S.AuthorImage>
                <S.AuthorContent>
                  <S.AuthorName>??????????</S.AuthorName>
                  <S.AuthorAbout>?????????????? ???????????? ??&nbsp;?????? 2022</S.AuthorAbout>
                </S.AuthorContent>
              </S.ArticleAuthor>
            </S.RightBlockContent>
          </S.ArticleRightBlock>
        </S.ArticleContent>
      </S.ArticleContainer>

      <S.DescriptionContainer>
        <S.DescriptionContainerTitle>
          ???????????????? ????????????
        </S.DescriptionContainerTitle>
        <S.DescriptionContent>
          <S.DescriptionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </S.DescriptionText>
        </S.DescriptionContent>
      </S.DescriptionContainer>
    </S.Main>
  );
};
