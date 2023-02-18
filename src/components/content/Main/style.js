import styled from "styled-components";

export const Container = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 52px 10px 37px;
    @media (max-width: 767px) {
      width: auto;
  }
    
`
export const Header = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 42px;
    color: #000000;
    margin-bottom: 30px;  

    :hover::before { 
    border-top: 2px solid #0080C1;
    border-left: 2px solid #0080C1;
    }
    ::before {
    content: "";
    display: none;
    width: 12px;
    height: 12px;
    background-color: transparent;
    border-top: 2px solid #000000;
    border-left: 2px solid #000000;
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
    position: absolute;
    top: 9px;
    left: 13px;
    cursor: pointer;
    }
`;

export const MainContent = styled.div`
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
`;

export const Cards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (270px), 4;
      grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  overflow-y: auto;
  scrollbar-color: #FFFFFF #2E2E2E;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 922px;
  @media (max-width: 767px) {
    display: grid;
    width: auto;
    -ms-grid-columns: (180px), 2;
      grid-template-columns: repeat(2, 180px);
  grid-gap: 10px;
  grid-auto-rows: auto;
  margin-bottom: 50px;
  }
  ::-webkit-scrollbar {
  width: 0px;
  background-color: #009EE4;
  }
  ::-webkit-scrollbar-thumb {
  background-color: #0080C1;
  border-radius: 3px;
}
`;
export const CardImage = styled.div`
  width: 270px;
  height: 270px;
  background-color: #F0F0F0;
  @media (max-width: 767px) {
  height: 160px;
  width: auto;
  }
  img {
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;
     @media (max-width: 767px) {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  }
`

export const CardsItem = styled.div`
    margin: 0;
    @media (max-width: 767px) {
    width:auto;
    height: auto;
  }
`;

export const CardTitle = styled.h3`
  height: 32px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009EE4;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration:none;
  a {
    color: #009EE4;
  }
  @media (max-width: 767px) {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;    
  }

`;

export const CardPrice = styled.p`
    font-size: 20px;
    line-height: 24px;
    font-weight: 800;
    padding-bottom: 10px;
    @media (max-width: 767px) {
      padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    font-size: 20px;
  }
`;
export const CardPlace = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
  margin-bottom: 4px;
  @media (max-width: 767px) {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
  }

`;
export const CardDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
  @media (max-width: 767px) {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
  }
`;
export const Card = styled.div`
  width: 270px;
  height: 441px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  @media (max-width: 767px) {
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    width: auto;
    height: 380px;
    
    
  }
`;

