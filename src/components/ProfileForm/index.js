import React, { useState } from 'react';
import {
  ProfileHeader,
  ProfileHeaderContent,
  ProfileHeaderImgLink,
  ProfileHeaderBtnWrap,
  ProfileContentWrapper,
  FormFieldWrapper,
  LeftSideBar,
  ProfilePicWrapper,
  CheckboxWrapper,
  ProfileImage,
  descFieldOveride,
  UploadLink,
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
import TagsUi from '../TagsUi';

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
        <Heading h1>Profile</Heading>
        <ProfileContentWrapper>
          <LeftSideBar>
            <ProfilePicWrapper>
              <ProfileImage src={DefaultImg} />
              <UploadLink>Change Photo</UploadLink>
            </ProfilePicWrapper>
            <CheckboxWrapper>
              <label style={{ marginTop: '20px' }}>
                <CheckBox
                  checked={checked}
                  isMentor={isMentor}
                  onChange={handleCheckboxChange}
                />
                <span style={{ marginLeft: 8 }}>
                  Appear as mentor
                </span>
              </label>
            </CheckboxWrapper>
          </LeftSideBar>
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
              style={descFieldOveride}
              name="description"
              label="Description"
              type="text"
              value={profileDetails.description}
              onChange={handleDetails}
            />
            <TagsUi />
          </FormFieldWrapper>
        </ProfileContentWrapper>
      </PageContainer>
    </>
  );
};

export default ProfileForm;
