import { ArticleHeader } from "../components/top-header/Article/ArticleHeader";
import { ArticleSearch } from "../components/search/Article/ArticleSearch";
import { MyArticleContent } from "../components/content/MyArticle/MyArticleContent";
import { Footer } from "../components/footer/index";
import * as S from "./style";

export const MyArticle = () => {
    return (
      <S.Wrapper>
        <S.Container>
          <ArticleHeader />
          <S.SmallContainer>
            <ArticleSearch />
            <MyArticleContent />
          </S.SmallContainer>
          <Footer />
        </S.Container>
      </S.Wrapper>
    );
  };
  