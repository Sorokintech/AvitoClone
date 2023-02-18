import { ArticleHeader } from "../components/top-header/Article/ArticleHeader";
import { ArticleSearch } from "../components/search/Article/ArticleSearch";
import { ReviewsModal } from "../modals/reviews";
import { Footer } from "../components/footer/index";
import * as S from "./style";


export const ReviewsMobile = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <ArticleHeader />
        <S.SmallContainer>
          <ArticleSearch />
          <ReviewsModal/>
        </S.SmallContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};