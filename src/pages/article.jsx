import { ArticleHeader } from "../components/top-header/Article/ArticleHeader";
import { ArticleSearch } from "../components/search/Article/ArticleSearch";
import { ArticleContent } from "../components/content/Article/ArticleContent";
import { Footer } from "../components/footer/index";
import * as S from "./style";

export const Article = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <ArticleHeader />
        <S.SmallContainer>
          <ArticleSearch />
          <ArticleContent />
        </S.SmallContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
