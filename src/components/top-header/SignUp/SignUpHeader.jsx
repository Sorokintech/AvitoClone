import React, { useState } from "react";
import { SignInModal } from "../../../modals/sign-in";
import * as S from "./style";

export const SignUpHeader = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <S.Header>
      <S.HeaderNav>
        <S.Button id="btnMainEnter" onClick={toggleModal}>
          Вход в личный кабинет
        </S.Button>
        {modal && (
          <>
            <SignInModal />
          </>
        )}
      </S.HeaderNav>
    </S.Header>
  );
};
