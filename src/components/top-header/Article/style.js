import styled from "styled-components";

export const Header = styled.div`
  background-color: #009EE4;
`;

export const Nav = styled.nav`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: end;
`;

export const Logo = styled.div`
  display: none;
`;
export const LogoLink = styled.a``
export const LogoImg = styled.img``

export const PlaceButton = styled.button`
  width: 232px;
  height: 40px;
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  background-color: transparent;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 1;
  :hover {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid #FFFFFF;
}
`
export const PortalButton = styled.button`
  width: 173px;
  height: 40px;
  margin-left: 10px;
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  background-color: transparent;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 1;
  text-decoration: none;
  a {
    text-decoration:none;
    color: #FFFFFF;
  }
  :hover {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid #FFFFFF;
}
`
