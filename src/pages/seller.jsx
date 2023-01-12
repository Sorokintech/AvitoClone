import { ArticleHeader } from "../components/top-header/Article/ArticleHeader";
import { ArticleSearch } from "../components/search/Article/ArticleSearch";
import { SellerProfile } from "../components/profile/SellerProfile/SellerProfileInfo";
import { Items } from "../components/items/index";
import { Footer } from "../components/footer/index";
import * as S from "./style";

export const Seller = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <ArticleHeader />
        <S.SmallContainer>
          <ArticleSearch />
          <SellerProfile />
        </S.SmallContainer>
        <Items/>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
