import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  /* width: 100%;
  min-height: 100%;
  overflow: hidden; */
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
  /* max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #F4F5F6; */
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - (600px/2));
  top: 60px;
  opacity: 1;
`;

export const ModalContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  width: 600px;
  height: auto;
  padding: 32px 50px 42px;
  background-color: #FFFFFF;
  border-radius: 12px;
  position: relative;
`;


export const ModalTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  :hover::before {
  border-top: 2px solid #0080C1;
  border-left: 2px solid #0080C1;
}
`;
export const ModalCloseButton = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;
`;
export const ModalCloseButtonLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  :hover::after {
  background-color: #0080C1;
};
  :hover::before {
  background-color: #0080C1;
};
 ::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 2px;
  border-radius: 2px;
  background-color: #D9D9D9;
  top: 47%;
  right: -4px;
}
  ::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 2px;
  border-radius: 2px;
  background-color: #D9D9D9;
  top: 47%;
  right: -4px;
}
::before {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
::after {
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}
`;
export const FormAdd = styled.div`
  margin-top: 22px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  width: 100%;
`;

export const FormBlock = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-bottom: 20px;
`;
export const FormBlockPrice = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-bottom: 20px;
  position: relative;
`;
export const FormInput = styled.input`
  padding: 13px 19px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  ::-webkit-input-placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0000004D;
}

`;
export const FormArea = styled.textarea`
  padding: 13px 19px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  max-height: 200px;
  font-size: 16px;
  line-height: 24px;
  ::-webkit-input-placeholder {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0000004D;
}

`
export const FormPrice = styled.input`
  padding: 13px 19px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 200px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;
export const FormPriceCover = styled.div`
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  position: absolute;
  bottom: 13px;
  left: 170px;
  z-index: 0;
  background-color: #FFFFFF;
  ::after {
  content: "\A0 \20BD";
  width: 24px;
  height: 24px;
  position: absolute;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  z-index: 2;
  }
`;

export const FormText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;
  span: {
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.3);
}
`;

export const FormImageBlock = styled.div`
  width: 500px;
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
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;
`;
export const FormImage = styled.div`
  width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;
  img: {
  display: block;
  width: 100%;
  height: auto;
  -o-object-fit: cover;
     object-fit: cover;
  z-index: 2;
}
`
export const FormImageCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #F0F0F0;
  z-index: -1;
  ::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 2px;
  border-radius: 2px;
  background-color: #D9D9D9;
  top: 50%;
  right: calc(50% - (30px/2));
}
::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 2px;
  border-radius: 2px;
  background-color: #D9D9D9;
  top: 50%;
  right: calc(50% - (30px/2));
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}
`;

export const PublishButton = styled.button`
  margin-top: 10px;
  width: 181px;
  height: 50px;
  background: #D9D9D9;
  border: 1px solid #D9D9D9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  :hover {
  background-color: #0080C1;
}
`
