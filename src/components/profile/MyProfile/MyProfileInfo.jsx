import React from "react";
import * as S from "./style";

export const ProfileInfo = () => {
  return (
    <div>
      <S.Header>Здравствуйте, Антон!</S.Header>
      <S.Profile>
        <S.ProfileContent>
          <S.SettingsTitle>Настройки профиля</S.SettingsTitle>
          <S.Settings>
            <S.SettingsLeftBlock>
              <S.SettingsLeftBlockImage>
                <a href="" target="_self">
                  <img src="#" alt=""></img>
                </a>
              </S.SettingsLeftBlockImage>
              <S.SettingsPhotoChangeLink href="" target="_self">
                Заменить
              </S.SettingsPhotoChangeLink>
            </S.SettingsLeftBlock>
            <S.SettingsRightBlock>
              <S.SettingsForm action="#">
                <S.SettingsFormDiv>
                  <label for="fname">Имя</label>
                  <S.SettingsFormInput
                    class="settings__f-name"
                    id="settings-fname"
                    name="fname"
                    type="text"
                    value="Ан"
                    placeholder=""
                  ></S.SettingsFormInput>
                </S.SettingsFormDiv>

                <S.SettingsFormDiv>
                  <label for="lname">Фамилия</label>
                  <S.SettingsFormInput
                    id="settings-lname"
                    name="lname"
                    type="text"
                    value="Городецкий"
                    placeholder=""
                  ></S.SettingsFormInput>
                </S.SettingsFormDiv>

                <S.SettingsFormDiv>
                  <label for="city">Город</label>
                  <S.SettingsFormInput
                    id="settings-city"
                    name="city"
                    type="text"
                    value="Санкт-Петербург"
                    placeholder=""
                  ></S.SettingsFormInput>
                </S.SettingsFormDiv>

                <S.SettingsFormDiv>
                  <label for="phone">Телефон</label>
                  <S.SettingsFormPhoneInput
                    id="settings-phone"
                    name="phone"
                    type="tel"
                    value="89161234567"x
                    placeholder="+79161234567"
                  ></S.SettingsFormPhoneInput>
                </S.SettingsFormDiv>

                <S.SettingsSaveButton id="settings-btn">
                  Сохранить
                </S.SettingsSaveButton>
              </S.SettingsForm>
            </S.SettingsRightBlock>
          </S.Settings>
        </S.ProfileContent>
      </S.Profile>
    </div>
  );
};
