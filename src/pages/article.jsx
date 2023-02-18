import { ArticleHeader } from "../components/top-header/Article/ArticleHeader";
import { SignUpHeader } from "../components/top-header/SignUp/SignUpHeader";
import { ArticleSearch } from "../components/search/Article/ArticleSearch";
import { ArticleContent } from "../components/content/Article/ArticleContent";
import { Footer } from "../components/footer/index";
import * as S from "./style";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const Article = () => {
  const { id } = useParams();
  const userIsLogged = useSelector((state) => state.auth.isLogin)
  return (
    <S.Wrapper>
      <S.Container>
        {userIsLogged ? <ArticleHeader /> : <SignUpHeader/> }
        <S.SmallContainer>
          <ArticleSearch />
          <ArticleContent id={id}/>
        </S.SmallContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
