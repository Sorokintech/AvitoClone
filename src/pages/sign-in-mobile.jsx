import { ArticleHeader } from "../components/top-header/Article/ArticleHeader";
import { ArticleSearch } from "../components/search/Article/ArticleSearch";
import { SignInModal } from "../modals/sign-in";
import { Footer } from "../components/footer/index";
import * as S from "./style";

export const SignIn = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <ArticleHeader />
        <S.SmallContainer>
          <ArticleSearch />
          <SignInModal/>
        </S.SmallContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
