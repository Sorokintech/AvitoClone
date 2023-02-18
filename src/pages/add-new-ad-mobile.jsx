import { ArticleHeader } from "../components/top-header/Article/ArticleHeader";
import { ArticleSearch } from "../components/search/Article/ArticleSearch";
import { AddNewModal } from "../modals/addnewat";
import { Footer } from "../components/footer/index";
import * as S from "./style";

export const AddNewAd = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <ArticleHeader />
        <S.SmallContainer>
          <ArticleSearch />
          <AddNewModal/>
        </S.SmallContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
