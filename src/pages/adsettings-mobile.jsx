import { ArticleHeader } from "../components/top-header/Article/ArticleHeader";
import { ArticleSearch } from "../components/search/Article/ArticleSearch";
import { AtSettingsModal } from "../modals/atclsettings";
import { Footer } from "../components/footer/index";
import * as S from "./style";


export const AdSettingsMobile = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <ArticleHeader />
        <S.SmallContainer>
          <ArticleSearch />
          <AtSettingsModal/>
        </S.SmallContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
