import React, { useState, useRef, useEffect } from "react";
import { SignInModal } from "../../../modals/sign-in";
import * as S from "./style";

export const SignUpHeader = () => {
  const [modal, setModal] = useState(false);
  const ref = useRef();
  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
  }
  useOnClickOutside(ref, () => setModal(false));

  const toggleModal = (event) => {
    setModal(!modal);
    console.log(event.target);
  };
  return (
    <S.Header >
      <S.HeaderNav>
        <S.Button id="btnMainEnter"  onClick={toggleModal}>
          Вход в личный кабинет
        </S.Button>
        {modal && (
          <>
            <SignInModal ref={ref} />
          </>
        )}
      </S.HeaderNav>
    </S.Header>
  );
};
