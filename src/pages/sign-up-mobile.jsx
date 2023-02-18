import { ArticleHeader } from "../components/top-header/Article/ArticleHeader";
import { ArticleSearch } from "../components/search/Article/ArticleSearch";
import { SignUpModal } from "../modals/sign-up";
import { Footer } from "../components/footer/index";
import * as S from "./style";

export const SignUp = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <ArticleHeader />
        <S.SmallContainer>
          <ArticleSearch />
          <SignUpModal/>
        </S.SmallContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
