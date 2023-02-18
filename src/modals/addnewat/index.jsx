import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateAdMutation, useCreateAdTextMutation, useAddImageMutation } from "../../store/services";
import { setCurrentArticle } from "../../store/slices/article";
import { modalAddNewAd } from "../../store/slices/modal";
import * as S from "./style";

export const AddNewModal = React.forwardRef((props, ref) => {
    const history = useNavigate();
    const [selectedImage, setSelectedImage] = useState(new Array(5));
    const [createAdText, {data: dataArticle, isSuccess: isSuccessArticle}] = useCreateAdTextMutation();
    const [createAdImages, {data: dataImages, isSuccess: isSuccessImages}] = useAddImageMutation();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const changeHandler = number => (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const copyArray = [...selectedImage];
            copyArray[number] = e.target.files[0];
            setSelectedImage(copyArray);
        }
    };
    const dispatch = useDispatch();
    const closingModal = ()  => {
        dispatch(modalAddNewAd(false));
    }

    function createAdTextHandler (e) {
        e.preventDefault();
        createAdText({title, description, price})
    }
    function finishPublc(data){
        dispatch(modalAddNewAd(false));
        dispatch(setCurrentArticle(data));

        history('/article/:id', {state: {id: data.id}})
    }

    useEffect(() => {
        if(isSuccessArticle) {
            if (selectedImage.some(v => !!v)){
                selectedImage.forEach(image => {
                    if (!!image) {
                        const formData = new FormData();
                        formData.append('file', image)
                        createAdImages({id: dataArticle.id, formData});
                    }
                });
            } else {
                finishPublc(dataArticle);
            }
        }
    }, [isSuccessArticle, dataArticle, selectedImage])  
    
    useEffect(() => {
        if(isSuccessImages) {
            finishPublc(dataImages);
        }
    }, [dataImages, isSuccessImages])  
    const topBtnHandler = () => {
        history('/article/:id');
      }

    return(
        <>
        <S.Wrapper>
        <S.Container>
            <S.ModalBlock ref={ref}>{props.children}
                <S.ModalContent>
                <S.TopContainer>
                    <S.GoBackButton onClick={topBtnHandler}>〱</S.GoBackButton>
                    <S.ModalTitle>Новое объявление</S.ModalTitle>
                </S.TopContainer>
                    <S.ModalCloseButton>
                        <S.ModalCloseButtonLine onClick={closingModal}></S.ModalCloseButtonLine>
                    </S.ModalCloseButton>
                    <S.FormAdd id="formNewArt" action="#">
                        <S.FormBlock>
                            <S.Label htmlFor="name">Название</S.Label>
                            <S.FormInput type="text" name="name" id="formName" placeholder="Введите название"  autoComplete="off" onChange={(e) => setTitle(e.target.value)}></S.FormInput>
                        </S.FormBlock>
                        <S.FormBlock>
                            <S.Label htmlFor="text">Описание</S.Label>                            
                            <S.FormArea name="text" id="formArea" cols="auto" rows="10" placeholder="Введите описание"   autoComplete="off" onChange={(e) => setDescription(e.target.value)}></S.FormArea>
                        </S.FormBlock>
                        <S.FormBlock>
                            <S.FormText>Фотографии товара <S.Span>не более 5 фотографий</S.Span></S.FormText>
                            <S.FormImageBlock>
                                {[0,1,2,3,4].map(id=>(
                                    <S.FormImage key={id}>
                                        <S.FormImageCover htmlFor={`file${id}`}>
                                            <S.FileInput type='file' name={`file${id}`} id={`file${id}`} access="image/*" onChange={changeHandler(id)}></S.FileInput>
                                            { selectedImage[id] && (
                                            <S.Image src={URL.createObjectURL(selectedImage[id])} alt="Thumb"></S.Image>)}
                                        </S.FormImageCover>                                    
                                    </S.FormImage>
                                ))}
                            </S.FormImageBlock>
                        </S.FormBlock>
                        <S.FormBlockPrice>
                            <label htmlFor="price">Цена</label>
                            <S.FormPrice type="text" name="price" id="formName"   autoComplete="off" onChange={(e) => setPrice(e.target.value)}></S.FormPrice>
                            <S.FormPriceCover></S.FormPriceCover>
                        </S.FormBlockPrice> 
                       
                        <S.PublishButton id="btnPublish" onClick={createAdTextHandler}>Опубликовать</S.PublishButton>
                        
                    </S.FormAdd>
                </S.ModalContent>
            </S.ModalBlock>
        </S.Container>
    </S.Wrapper>
    </>
    );
});