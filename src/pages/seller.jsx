import { ArticleHeader } from "../components/top-header/Article/ArticleHeader";
import { ArticleSearch } from "../components/search/Article/ArticleSearch";
import { SellerProfile } from "../components/profile/SellerProfile/SellerProfileInfo";
import { Items } from "../components/items/index";
import { Footer } from "../components/footer/index";
import * as S from "./style";
import { useSelector } from "react-redux";
import { SignUpHeader } from "../components/top-header/SignUp/SignUpHeader";
import { useParams } from "react-router-dom";

export const Seller = () => {
  const userIsLogged = useSelector((state) => state.auth.isLogin)
  const { id } = useParams();
  return (
    <S.Wrapper>
      <S.Container>
      {userIsLogged ? <ArticleHeader/> : <SignUpHeader/>}
        <S.SmallContainer>
          <ArticleSearch />
          <SellerProfile />
          <Items/>
        </S.SmallContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
