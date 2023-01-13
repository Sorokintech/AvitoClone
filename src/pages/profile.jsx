import { ArticleHeader } from "../components/top-header/Article/ArticleHeader";
import { ArticleSearch } from "../components/search/Article/ArticleSearch";
import { ProfileInfo } from "../components/profile/MyProfile/MyProfileInfo";
import { Items } from "../components/items/index";
import { Footer } from "../components/footer/index";
import * as S from "./style";

export const Profile = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <ArticleHeader />
        <S.SmallContainer>
          <ArticleSearch />
          <ProfileInfo />
          <Items/>
        </S.SmallContainer>
       
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
