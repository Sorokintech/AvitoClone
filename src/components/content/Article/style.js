import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  @media (max-width: 767px) {
  }
`

export const ArticleContainer = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  padding: 0 5px 70px;
  @media (max-width: 767px) {
   margin: 0;
   padding: 0;
  }

`

export const ArticleContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
      -ms-flex-align: top;
          align-items: top;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  @media (max-width: 767px) {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  }
`;

export const ArticleLeftBlock = styled.div`
  max-width: 480px;
  margin-right: 54px;
  @media (max-width: 767px) {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  }
`
export const ArticleRightBlock = styled.div`
  max-width: 621px;
  @media (max-width: 767px) {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  }
`

export const ArticleFillImg = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
          :hover::before {
  border-top: 2px solid #0080C1;
  border-left: 2px solid #0080C1;
}
`

export const ArticleImage = styled.div`
  width: 480px;
  height: 480px;
  background-color: #F0F0F0;
  margin: 0 5px;
  @media (max-width: 767px) {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 320px;
  }

`

export const ChildrenImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;
`

export const ArticleImageBar = styled.div`
  margin-top: 30px;
  width: 490px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: left;
      -ms-flex-pack: left;
          justify-content: left;
  overflow: hidden;
  margin-left: -5px;
  @media (max-width: 767px) {
  display: none;
  }
`

export const BarImageDiv = styled.div`
  width: 88px;
  min-width: 88px;
  height: 88px;
  background-color: #F0F0F0;
  border: 2px solid #F0F0F0;
  margin: 0 5px;
  img {
    width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;
  }

`
export const BarMob = styled.div`
  display: none;
`
export const BarMobImage = styled.div`
  :active {
  background-color: #FFFFFF;
}
`
export const RightBlockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  @media (max-width: 767px) {
  padding: 10px 20px;
  }
`
export const ArticleTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 32px;
    line-height: 46px;
    font-weight: 700;
    color: #000000;
    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 34px;
      padding-bottom: 5px;
  }
`
export const ArticleInfo = styled.div`
  margin-bottom: 34px;
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`

export const ArticleDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
  margin-bottom: 4px;
  @media (max-width: 767px) {

  }
`

export const ArticleCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
  margin-bottom: 4px;
`

export const ArticleLink = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #009EE4;
  cursor: pointer;
`

export const ArticlePrice = styled.p`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;
`
export const ArticleButton = styled.button`
  background-color: #009EE4;
  border-radius: 6px;
  border: 1px solid #009EE4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
  }
  :hover {
  background-color: #0080C1;
}
  @media (max-width: 767px) {
    width: 100%;
}
`

export const ArticleAuthor = styled.div`
  margin-top: 34px;
  margin-bottom: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
`
export const AuthorImage = styled.div`
  width: 40px;
  height: 40px;
  background-color: #F0F0F0;
  border-radius: 50%;
  img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 50%;
  -o-object-fit: cover;
     object-fit: cover;
  }
  `
export const AuthorContent = styled.div`
  margin-left: 12px;
  `
export const AuthorName = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009EE4;
  a {
    color: #009EE4;
  }
`
export const AuthorAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5F5F5F;
`

export const DescriptionContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0px 5px;
    @media (max-width: 767px) {
    padding: 0 20px;
    margin-bottom: 20px;
  }
`
export const DescriptionContainerTitle = styled.h3`
  margin-bottom: 32px;
  padding: 0 5px;
  font-size: 32px;
    line-height: 46px;
    font-weight: 700;
    color: #000000;
  `
export const DescriptionContent = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;
  `
export const DescriptionText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  `

export const ButtonsDiv = styled.div`
  display: flex;
  gap:10px;
  @media (max-width: 767px) {
    flex-direction: column;
  }

`
