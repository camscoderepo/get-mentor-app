import styled from 'styled-components';

export const ProfileHeader = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  padding-right: 4.2%;
  padding-left: 4.2%;
`;

export const ProfileHeaderContent = styled.div`
  position: relative;
  display: flex;
  padding-top: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileHeaderImgLink = styled.div`
  position: static;
  left: 0px;
  top: 0px;
`;

export const ProfileHeaderBtnWrap = styled.div`
  position: static;
  left: auto;
  top: 0px;
  right: 0px;
  bottom: auto;
  display: block;
  width: auto;
  max-width: 175px;
  justify-content: space-between;
`;
export const ProfileContentWrapper = styled.div`
  /* margin-top: 8%; */
  background-color: yellow;
`;
export const ProfileFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

export const FormFieldWrapper = styled.div`
  display: block;
  width: 33.33%;
`;

export const LeftSideBar = styled.div`
  position: absolute;
  left: 0%;
  top: 32.1%;
  right: auto;
  bottom: auto;
  width: 33%;
  height: 600px;
  background-color: orange;
`;

export const ProfilePicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProfileImage = styled.img`
  border-radius: 50%;
`;
export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  max-width: 38%;
  margin-left: 20%;
  background-color: red;
`;
