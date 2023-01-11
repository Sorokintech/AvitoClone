import { MainContent } from "../components/content/MainContent"
import { SignUpHeader } from "../components/top-header/SignUpHeader";
import { MainSearch } from "../components/search/MainSearch";
import { Footer } from "../components/footer/index";
import * as S from "./style";


export const Main = () => {

    return (
        <S.Wrapper>
            <S.Container>
                <SignUpHeader/>
                    <S.SmallContainer>
                        <MainSearch/>
                        <MainContent/>
                    </S.SmallContainer>
                <Footer/>
            </S.Container>
        </S.Wrapper>
        

    )
};