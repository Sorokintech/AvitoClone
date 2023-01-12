import styled from "styled-components";


export const Container = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 52px 10px 37px;
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
    /* position: fixed; */
    /* right: 0;
    left: 0;
    top: 134px;
    bottom: 84px; */
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
  img: {
    width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;
  }
`

export const CardsItem = styled.div`
    margin: 0;
`;

export const CardTitle = styled.h3`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009EE4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardPrice = styled.p`
    font-size: 16px;
    line-height: 24px;
`;
export const CardPlace = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
  margin-bottom: 4px;
`;
export const CardDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
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
`;

