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
        </S.SmallContainer>
        <Items/>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
