import styled from "styled-components";

export const Search = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px 0px;
`;
export const SearchLogoLink = styled.a``;
export const SearchLogoLinkMob = styled.a`
    display: none;
`;
export const SearchLogoMobLink = styled.img``;
export const SearchForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;
export const SearchText = styled.input`
    width: 100%;
    height: 50px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background-color: transparent;
    padding: 13px 19px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    ::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    }
    :-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}
    ::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    }
    ::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}
`;
export const SearchTextMob = styled.input`
    display: inline-block;
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 30px;
    background-color: #FFFFFF;
    padding: 5px 17px;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    display: none;
`;
export const Button = styled.button`
  margin-left: 10px;
  width: 158px;
  height: 50px;
  background-color: #009EE4;
  border: 1px solid #009EE4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  :hover {
  background-color: #0080C1;
  
}
`;
export const SearchLogoImg = styled.img`
  width: 54px;
  height: auto;
`;

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;
`;
export const MainMenu = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 11px 0;
  padding: 43px 5px 77px;
`;
export const MenuLogoLink = styled.a`
  width: 54;
  height: 50px;
`;
export const MainLogoImg = styled.img`
  width: 54px;
  height: auto;
`;
export const MenuForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;
export const ButtonMenu = styled.button`
  width: 241px;
  height: 50px;
  background-color: #009EE4;
  border: 1px solid #009EE4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  :hover {
  background-color: #0080C1;
}
`;