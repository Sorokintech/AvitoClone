import styled from "styled-components";

export const Header = styled.div`
  background-color: #009ee4;
`;
export const HeaderNav = styled.nav`
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
  @media (max-width: 767px) {
      display: none;
    }
`;
export const Button = styled.button`
  width: 224px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
  :hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
`;

// export const Overlay = styled.div`
//   width: 100vw;
//   height: 100vh;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   position: fixed;
//   background: rgba(49, 49, 49, 0.8);
// `;
