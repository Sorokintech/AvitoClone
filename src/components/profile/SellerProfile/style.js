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
`;
export const Profile = styled.div`
  width: 100%;
  padding: 0 0 70px;
`;
export const ProfileContent = styled.div`
  width: 100%;
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
`;

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
`
export const SellerImage = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #F0F0F0;
  img {
    width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;
  }
`;

export const SellerRightBlock = styled.div`
  width: auto;
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
  `