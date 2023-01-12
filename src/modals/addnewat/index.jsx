import * as S from "./style";

export const AddNewModal = () => {
    return(

        <S.Wrapper>
        <S.Container>
            <S.ModalBlock>
                <S.ModalContent>
                    <S.ModalTitle>Новое объявление</S.ModalTitle>
                    <S.ModalCloseButton>
                        <S.ModalCloseButtonLine></S.ModalCloseButtonLine>
                    </S.ModalCloseButton>
                    <S.FormAdd id="formNewArt" action="#">
                        <S.FormBlock>
                            <label for="name">Название</label>
                            <S.FormInput type="text" name="name" id="formName" placeholder="Введите название"></S.FormInput>
                        </S.FormBlock>
                        <S.FormBlock>
                            <label for="text">Описание</label>                            
                            <S.FormArea name="text" id="formArea" cols="auto" rows="10" placeholder="Введите описание"></S.FormArea>
                        </S.FormBlock>
                        <S.FormBlock>
                            <S.FormText>Фотографии товара<span>не более 5 фотографий</span></S.FormText>
                            <S.FormImageBlock>
                                <div class="form-newArt__img">
                                    <img src="" alt="">
                                    <div class="form-newArt__img-cover"></div>                                    
                                </div>
                                <div class="form-newArt__img">
                                    <img src="" alt="">
                                    <div class="form-newArt__img-cover"></div>
                                </div>
                                <div class="form-newArt__img">
                                    <div class="form-newArt__img-cover"></div>
                                    <img src="" alt="">
                                </div>
                                <div class="form-newArt__img">
                                    <div class="form-newArt__img-cover"></div>
                                    <img src="" alt="">
                                </div>
                                <div class="form-newArt__img">
                                    <div class="form-newArt__img-cover"></div>
                                    <img src="" alt="">
                                </div>
                            </div>
                        </S.FormBlock>
                        <div class="form-newArt__block block-price">
                            <label for="price">Цена</label>
                            <S.FormPrice class="form-newArt__input-price" type="text" name="price" id="formName"></S.FormPrice>
                            <div class="form-newArt__input-price-cover"></div>
                        </div> 
                       
                        <button class="form-newArt__btn-pub btn-hov02" id="btnPublish">Опубликовать</button>
                        
                    </S.FormAdd>
                </div>
            </div>
        </div>
    </div>
    );
};