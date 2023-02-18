import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { currentItem } from "../../../store/slices/article";
import { useChangeAdMutation, useChangeAvatarMutation, useChangeUserMutation, useGetAllUsersQuery, useGetCurrentUserQuery } from "../../../store/services";
import * as S from "./style";

export const ProfileInfo = () => {
  const {data: {name, email, city, id, phone, sells_from, surname, avatar, role} = {}, isSuccess : isSuccessGetCurrentUser, refetch} = useGetCurrentUserQuery();
  const [changeInfo, {data: newData, isSuccess}] = useChangeUserMutation();
  const currentUser = useSelector((state) => state.auth.id)
  const [newName, setNewName] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newPhone, setNewPhone] = useState();
  const [newCity, setNewCity] = useState();
  const [newSurname, setNewSurname] = useState();
  const {data} = useGetAllUsersQuery();
  const {data: avatarPicture} = useChangeAvatarMutation();
  const [changeAvatar, {data: newAvatar, isSuccess : avatarChangeSuccess}] = useChangeAvatarMutation();
  function changeUserInfo (e) {
    e.preventDefault();
    changeInfo({name: newName, email: newEmail, phone: newPhone, surname:newSurname, city: newCity});
  }
  useEffect(() => {
    if(isSuccess){ 
      refetch(); 
    } 
}, [isSuccess])
useEffect(() => {
  if(avatarChangeSuccess){ 
    refetch(); 
  } 
}, [avatarChangeSuccess])
  const path = "http://localhost:8090/";

  const changeHandler = (e) => {
    const form = new FormData();
    form.append('file', e.target.files[0])
    changeAvatar(form) 
   };
  return (
    <S.Main>
      <S.Header>Здравствуйте, {name ? name : 'Пользователь'}!</S.Header>
      <S.Profile>
        <S.ProfileContent>
          <S.SettingsTitle>Настройки профиля</S.SettingsTitle>
          <S.Settings>
            <S.SettingsLeftBlock>
              <S.SettingsLeftBlockImage>
                  <img src={`${path}${avatar}`} alt=""></img> 
                   {/* поправить рамку в CSS */}
                   
              </S.SettingsLeftBlockImage>
              <S.FormImageCover htmlFor="file" >Заменить 
              <S.SettingsPhotoChangeInput type="file" name="file" id="file" access="image/*" onChange={changeHandler} ></S.SettingsPhotoChangeInput>
              </S.FormImageCover>
            </S.SettingsLeftBlock>
            <S.SettingsRightBlock>
              <S.SettingsForm action="#">
                <S.SettingsFormDiv>
                  <label htmlFor="fname">Имя</label>
                  <S.SettingsFormInput
                    className="settings__f-name"
                    id="settings-fname"
                    name="fname"
                    type="text"
                    defaultValue={name}
                    placeholder=""
                    onChange={(e) => setNewName(e.target.value)}
                  ></S.SettingsFormInput>
                </S.SettingsFormDiv>

                <S.SettingsFormDiv>
                  <label htmlFor="lname">Фамилия</label>
                  <S.SettingsFormInput
                    id="settings-lname"
                    name="lname"
                    type="text"
                    defaultValue={surname}
                    placeholder=""
                    onChange={(e) => setNewSurname(e.target.value)}
                  ></S.SettingsFormInput>
                </S.SettingsFormDiv>

                <S.SettingsFormDiv>
                  <label htmlFor="city">Город</label>
                  <S.SettingsFormInput
                    id="settings-city"
                    name="city"
                    type="text"
                    defaultValue={city}
                    placeholder=""
                    onChange={(e) => setNewCity(e.target.value)}
                  ></S.SettingsFormInput>
                </S.SettingsFormDiv>

                <S.SettingsFormDiv>
                  <label htmlFor="phone">Телефон</label>
                  <S.SettingsFormPhoneInput
                    id="settings-phone"
                    name="phone"
                    type="tel"
                    defaultValue={phone}
                    placeholder="+79161234567"
                    onChange={(e) => setNewPhone(e.target.value)}
                  ></S.SettingsFormPhoneInput>
                </S.SettingsFormDiv>

                <S.SettingsSaveButton id="settings-btn" onClick={changeUserInfo}>
                  Сохранить
                </S.SettingsSaveButton>
              </S.SettingsForm>
            </S.SettingsRightBlock>
          </S.Settings>
        </S.ProfileContent>
      </S.Profile>
    </S.Main>
  );
};
