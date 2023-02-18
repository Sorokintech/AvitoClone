import React, { useState } from "react";
import * as S from "./style";


export const AddNewModal = React.forwardRef((props, ref) => {
    const [selectedImage, setSelectedImage] = useState();
    
    const changeHandler = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedImage(e.target.files[0]);
        }
    };

    return(
        <>
        <S.Wrapper>
        <S.Container>
            <S.ModalBlock ref={ref}>{props.children}
                <S.ModalContent>
                    <S.ModalTitle>Новое объявление</S.ModalTitle>
                    <S.ModalCloseButton>
                        <S.ModalCloseButtonLine></S.ModalCloseButtonLine>
                    </S.ModalCloseButton>
                    <S.FormAdd id="formNewArt" action="#">
                        <S.FormBlock>
                            <S.Label for="name">Название</S.Label>
                            <S.FormInput type="text" name="name" id="formName" placeholder="Введите название"   autoComplete="off" ></S.FormInput>
                        </S.FormBlock>
                        <S.FormBlock>
                            <S.Label for="text">Описание</S.Label>                            
                            <S.FormArea name="text" id="formArea" cols="auto" rows="10" placeholder="Введите описание"   autoComplete="off"></S.FormArea>
                        </S.FormBlock>
                        <S.FormBlock>
                            <S.FormText>Фотографии товара <S.Span>не более 5 фотографий</S.Span></S.FormText>
                            <S.FormImageBlock>
                                <S.FormImage>
                                    <S.FormImageCover htmlFor="file">
                                        <S.FileInput type='file' name="file" id="file" access="image/*" onChange={changeHandler}></S.FileInput>
                                        { selectedImage && (
                                        <S.Image src={URL.createObjectURL(selectedImage)} alt="Thumb"></S.Image>)}
                                    </S.FormImageCover>                                    
                                </S.FormImage>
                                <S.FormImage>
                                <S.FormImageCover htmlFor="file">
                                        <S.FileInput type='file' name="file" id="file" access="image/*" onChange={changeHandler}></S.FileInput>
                                        { selectedImage && (
                                        <S.Image src={URL.createObjectURL(selectedImage)} alt="Thumb"></S.Image>)}
                                    </S.FormImageCover>                                     
                                </S.FormImage>
                                <S.FormImage>
                                <S.FormImageCover htmlFor="file">
                                        <S.FileInput type='file' name="file" id="file" access="image/*" onChange={changeHandler}></S.FileInput>
                                        { selectedImage && (
                                        <S.Image src={URL.createObjectURL(selectedImage)} alt="Thumb"></S.Image>)}
                                    </S.FormImageCover>                                      
                                </S.FormImage>
                                <S.FormImage>
                                <S.FormImageCover htmlFor="file">
                                        <S.FileInput type='file' name="file" id="file" access="image/*" onChange={changeHandler}></S.FileInput>
                                        { selectedImage && (
                                        <S.Image src={URL.createObjectURL(selectedImage)} alt="Thumb"></S.Image>)}
                                    </S.FormImageCover>                                     
                                </S.FormImage>
                                <S.FormImage>
                                <S.FormImageCover htmlFor="file">
                                        <S.FileInput type='file' name="file" id="file" access="image/*" onChange={changeHandler}></S.FileInput>
                                        { selectedImage && (
                                        <S.Image src={URL.createObjectURL(selectedImage)} alt="Thumb"></S.Image>)}
                                    </S.FormImageCover>                                       
                                </S.FormImage>
                            </S.FormImageBlock>
                        </S.FormBlock>
                        <S.FormBlockPrice>
                            <label for="price">Цена</label>
                            <S.FormPrice type="text" name="price" id="formName"   autoComplete="off"></S.FormPrice>
                            <S.FormPriceCover></S.FormPriceCover>
                        </S.FormBlockPrice> 
                       
                        <S.PublishButton id="btnPublish">Опубликовать</S.PublishButton>
                        
                    </S.FormAdd>
                </S.ModalContent>
            </S.ModalBlock>
        </S.Container>
    </S.Wrapper>
    </>
    );
});