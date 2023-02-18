import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  position: fixed;
  @media (max-width: 767px) {
    position: relative;
  }
`;
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
  @media (max-width: 767px) {
    position: relative;
    background: transparent;
    z-index: 0;
    overflow: scroll;
  }
`;
export const ModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (647px / 2));
  opacity: 1;
  @media (max-width: 767px) {
    padding-bottom: 40px;
  }
  
`;
export const ModalForm = styled.form`
  width: 366px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 12px;
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
  padding: 43px 42px 47px;
  :first-child {
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    padding-top: 20px;
  }
`;
export const ModalLogo = styled.img`
  width: 140px;
  height: 21px;
  margin-bottom: 42px;
  background-color: transparent;
  img: {
    width: 140px;
    height: auto;
  }
  @media (max-width: 767px) {
    margin-bottom:30px;
  }
`;
export const SignUpInput = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  margin-bottom: 38px;
  outline: none;
  @media (max-width: 767px) {
    display:block;
    background: transparent;
    border: solid 1px #d0cece;
    padding: 14px 20px;
    border-radius: 30px;
    margin-bottom: 14px;
  } 
  ::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
  :-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
  ::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
`;
export const SignUpButton = styled.button`
  width: 278px;
  height: 62px;
  background-color: #009ee4;
  border-radius: 6px;
  border: none;
  margin-top: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #fff;
  :active {
    background-color: #0080c1;
  }
  :hover {
    background-color: #0080c1;
  }
  a: {
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #ffffff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`;
export const ErrorForm = styled.p`
  text-align:center;
  color: #ff0016;
`

