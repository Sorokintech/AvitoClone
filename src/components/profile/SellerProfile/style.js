import styled from "styled-components";

export const Header = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
  :hover::before {
  border-top: 2px solid #0080C1;
  border-left: 2px solid #0080C1;
}
@media (max-width: 767px) {
    font-size: 30px;
    padding-top: 30px;
  }
`;
export const Profile = styled.div`
  width: 100%;
  padding: 0 0 70px;
  @media (max-width: 767px) {
    padding: 0 20px;
    margin: 0;
  }
`;
export const ProfileContent = styled.div`
  width: 100%;
  @media (max-width: 767px) {
    width: auto;
  }
`;
export const Seller = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
      -ms-flex-align: top;
          align-items: top;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: start;
    @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const RightBlockButtom = styled.div`
  display: flex;
  flex-direction: row-reverse;
@media (max-width: 767px) {
  display: flex;
  flex-direction: column-reverse;
}
`

export const SellerLeftBlock = styled.div`
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
  margin-right: 50px;
  @media (max-width: 767px) {
    margin: 0;
  }
`
export const TopContainer = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: row; 
  }
`
export const GoBackButton = styled.button`
  display: none;
  @media (max-width: 767px) {
    padding: 0;
    margin: 0;
    display: block;
    width: 50px;
    font-size: 30px;
    background: transparent;
    border: none;
    padding-left: 15px;
  }
`
export const SellerImage = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #F0F0F0;
  img {
  border-radius: 50%;
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;
  }
`;

export const SellerRightBlock = styled.div`
  width: auto;
  @media (max-width: 767px) {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #000000;
  margin-bottom: 0px;
  `
export const City = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
  margin-bottom: 10px;
  `
export const Info = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
  margin-bottom: 10px;
  `
export const SellerMobBlock = styled.div`
  display: none;
  `
export const SellerImageMob = styled.div``
export const SellerShowButton = styled.button`
  margin-top: 20px;
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
    margin: 0;
    margin-bottom: 40px;
    margin-top: 30px;
  }
  `