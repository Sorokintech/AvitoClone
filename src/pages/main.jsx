import { MainContent } from "../components/content/Main/MainContent";
import { SignUpHeader } from "../components/top-header/SignUp/SignUpHeader";
import { ArticleHeader } from "../components/top-header/Article/ArticleHeader";
import { MainSearch } from "../components/search/Main/MainSearch";
import { Footer } from "../components/footer/index";
import * as S from "./style";
import { useSelector } from "react-redux";

export const Main = () => {
  const userIsLogged = useSelector((state) => state.auth.isLogin)
  return (
    <S.Wrapper>
      <S.Container>
        {userIsLogged ? <ArticleHeader/> : <SignUpHeader />}
        <S.SmallContainer>
          <MainSearch />
          <MainContent />
        </S.SmallContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
