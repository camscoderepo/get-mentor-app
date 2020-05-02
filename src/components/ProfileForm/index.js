import React, { useState } from 'react';
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
  CheckboxWrapper,
  ProfileImage,
} from './profile-form-styles';
import PageContainer from '../PageContainer';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';
import Button from '../Button';
import InputFloatLabel from '../Input';
import DefaultImg from '../../assets/images/no-img.png';
import Heading from '../Heading';
import CheckBox from '../Checkbox';

const ProfileForm = (props) => {
  const [isMentor, setIsMentor] = useState(false);
  const [checked, setChecked] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    name: '',
    email: '',
    description: '',
    photoUrl: null,
    mentor: false,
  });

  const handleCheckboxChange = () => {
    setChecked(!checked);
    if (checked === false) {
      setProfileDetails({
        ...profileDetails,
        mentor: true,
      });
    }
  };

  const handleDetails = (e) => {
    setProfileDetails({
      ...profileDetails,
      [e.target.name]: e.target.value,
    });
  };

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
            <Button
              primary
              onClick={() => props.handleSaveClick(profileDetails)}
            >
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
              <InputFloatLabel
                name="name"
                label="Name"
                type="text"
                value={profileDetails.name}
                onChange={handleDetails}
              />
              <InputFloatLabel
                name="email"
                label="Email"
                type="email"
                value={profileDetails.email}
                onChange={handleDetails}
              />
              <InputFloatLabel
                name="details"
                label="Details"
                type="text"
                value={profileDetails.description}
                onChange={handleDetails}
              />
            </FormFieldWrapper>
          </ProfileFormWrapper>
          <LeftSideBar>
            <ProfilePicWrapper>
              <ProfileImage src={DefaultImg} />
            </ProfilePicWrapper>
            <CheckboxWrapper>
              <CheckBox
                checked={checked}
                isMentor={isMentor}
                onChange={handleCheckboxChange}
              />
              <p>Appear as mentor</p>
            </CheckboxWrapper>
          </LeftSideBar>
        </ProfileContentWrapper>
      </PageContainer>
    </>
  );
};

export default ProfileForm;
