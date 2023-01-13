import styled from "styled-components";

export const Header = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
  
`;
export const Profile = styled.div`
  width: 100%;
  padding: 0 0 70px;
`;

export const ProfileContent = styled.div`
  max-width: 834px;
`;
export const SettingsTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
    line-height: 70px;
    font-weight: 600;
    color: #000000;
`;
export const Settings = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
      -ms-flex-align: top;
          align-items: top;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
`;
export const SettingsLeftBlock = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-right: 43px;
`;
export const SettingsLeftBlockImage = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #F0F0F0;
  img {
    width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;
  }
`;
export const SettingsPhotoChangeLink = styled.a`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009EE4;
`;
export const SettingsRightBlock = styled.div`
  width: 630px;
`
export const SettingsForm = styled.form`
  width: 630px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
`;

export const SettingsFormDiv = styled.div`
  display: inline-block;
  margin: 0 7px 20px;
  label {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #C4C4C4;
    margin-bottom: 4px;
    display: block;
  }
`;
export const SettingsFormInput = styled.input`
  width: 300px;
  background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 13px 19px;
`;
export const SettingsFormPhoneInput = styled.input`
  width: 614px;
  background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 13px 19px;
`;
export const SettingsSaveButton = styled.button`
  font-size: 16px;
  line-height: 1;
  color: #FFFFFF;
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;
  background-color: #009EE4;
  border-radius: 6px;
  border: 1px solid #009EE4;
`;
