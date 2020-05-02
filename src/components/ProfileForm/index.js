import React from 'react';
import {
  ProfileHeader,
  ProfileHeaderContent,
  ProfileHeaderImgLink,
  ProfileHeaderBtnWrap,
  ProfileContentWrapper,
  ProfileFormWrapper,
  FormFieldWrapper,
  LeftSideBar,
  ProfilePicWrapper,
} from './profile-form-styles';
import PageContainer from '../PageContainer';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';
import Button from '../Button';
import InputFloatLabel from '../Input';
import DefaultImg from '../../assets/images/no-img.png';
import Heading from '../Heading';

const ProfileForm = (props) => {
  return (
    <>
      <ProfileHeader>
        <ProfileHeaderContent>
          <ProfileHeaderImgLink>
            <Link to={ROUTES.LANDING}>
              <Logo />
            </Link>
          </ProfileHeaderImgLink>
          <ProfileHeaderBtnWrap>
            <Button onClick={() => props.close()}>Cancel</Button>
            <Button primary onClick={() => props.handleSaveClick()}>
              Save
            </Button>
          </ProfileHeaderBtnWrap>
        </ProfileHeaderContent>
      </ProfileHeader>
      <PageContainer>
        <ProfileContentWrapper>
          <Heading h1>Profile</Heading>
          <ProfileFormWrapper>
            <FormFieldWrapper>
              <InputFloatLabel />
              <InputFloatLabel />
              <InputFloatLabel />
            </FormFieldWrapper>
          </ProfileFormWrapper>
          <LeftSideBar>
            <ProfilePicWrapper>
              <img src={DefaultImg} />
            </ProfilePicWrapper>
          </LeftSideBar>
        </ProfileContentWrapper>
      </PageContainer>
    </>
  );
};

export default ProfileForm;
