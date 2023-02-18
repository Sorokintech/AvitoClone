import styled from "styled-components";

export const Footer = styled.div`
  display: none;
  @media (max-width: 767px) {
  display:block;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
    padding: 10px 0px;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);  
    margin-top: auto;
    z-index: 1;
  }
`;
export const FooterContainer = styled.div`
@media (max-width: 767px) {
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    align-content: center;
  }
`
export const FooterImg = styled.div``
