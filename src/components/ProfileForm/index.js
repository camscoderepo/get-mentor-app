import React, { useState } from 'react';
import { withFirebase } from '../Firebase';
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
import TextAreaFloatLabel from '../TextArea';
import DefaultImg from '../../assets/images/no-img.png';
import Heading from '../Heading';
import CheckBox from '../Checkbox';
import TagsUi from '../TagsUi';

const ProfileForm = (props) => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [isMentor, setIsMentor] = useState(false);
  const [checked, setChecked] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    name: '',
    email: '',
    description: '',
    photoUrl: null,
    mentor: false,
    tags: [],
    imgUrl: null,
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

  const getTagEntered = (titles) => {
    const tagsToAdd = [];
    const getTags = Object.values(titles);
    const newTags = getTags.forEach((tag, a) => {
      const tagText = tag.text;
      tagsToAdd.push(tagText);
    });
    setProfileDetails({
      ...profileDetails,
      tags: tagsToAdd,
    });
  };
  const handleDetails = (e) => {
    setProfileDetails({
      ...profileDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleImgLinkClick = (e) => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };
  const changeImage = (e) => {
    try {
      if (e.target.files[0]) {
        const newImage = e.target.files[0];
        setImage(newImage);
        handleUpload(newImage);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpload = (image) => {
    console.log('called', image);
    const uploadTask = props.firebase.storage
      .ref(`images/${image.name}`)
      .put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        props.firebase.storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            setProfileDetails({
              ...profileDetails,
              imgUrl: url,
            });
          });
      },
    );
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
              <ProfileImage src={`${url}` || DefaultImg} />
              <UploadLink onClick={handleImgLinkClick}>
                Change Photo
              </UploadLink>
              <input
                id="imageInput"
                style={{
                  display: 'none',
                }}
                type="file"
                onChange={changeImage}
              />
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
            <TextAreaFloatLabel
              style={descFieldOveride}
              name="description"
              label="Description"
              type="text"
              value={profileDetails.description}
              onChange={handleDetails}
            />
            <TagsUi getTags={getTagEntered} />
          </FormFieldWrapper>
        </ProfileContentWrapper>
      </PageContainer>
    </>
  );
};

export default withFirebase(ProfileForm);
