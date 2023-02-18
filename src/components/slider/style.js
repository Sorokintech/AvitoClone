import styled from "styled-components";

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
export const LeftArrow = styled.div`
  position: relative;
  width: 45px;
  bottom: 50%;
  // top: 45%;
  transform: translate(0, -50%);
  font-size: 45px;
  color: #fff;
  zIndex: 1;
  cursor: pointer;
  background: rgba(49, 49, 49, 0.8);
  border-radius: 5px;
`
export const RightArrow = styled.div`
  position: relative;
  width: 45px;
  // top: calc(50% - (10%/2));
  // right: calc(50% - (10%/2));
  left: 90.6%;
  bottom: 61%;
  transform: translate(0, -50%);
  font-size: 45px;
  color: #fff;
  zIndex: 1;
  cursor: pointer;
  border-radius: 5px;
  background: rgba(49, 49, 49, 0.8);
  @media (max-width: 767px) {
  left: 88%;
  bottom: 67%;

  }
`