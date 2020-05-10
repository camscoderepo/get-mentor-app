import React, { useState } from 'react';
import { AuthUserContext } from '../Session';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import PageContainer from '../PageContainer';
import { AccountContent } from './account-styles';
import Button from '../UI_Components/Button';
import Modal from '../UI_Components/Modal';
import ProfileForm from '../ProfileForm';
import Heading from '../UI_Components/Heading';

const AccountPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSaveClick = (profileDetails) => {
    handleClose();
    alert(
      `Profile Data
      Name: ${profileDetails.name}
      Email: ${profileDetails.email}
      Description: ${profileDetails.description}
      Mentor: ${profileDetails.mentor}
      Tags: ${profileDetails.tags} 
      ProfileImage: ${profileDetails.imgUrl}  
      `,
    );
  };

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div>
          {isOpen && (
            <Modal
              setHeight={'100vh'}
              setWidth={'90vw'}
              setMargin={'2% auto'}
              setPadding={'13% 4.2% 0 4.2%'}
            >
              <ProfileForm
                close={handleClose}
                handleSaveClick={handleSaveClick}
              />
            </Modal>
          )}
          <PageContainer>
            <AccountContent>
              <Heading h1>Account: {authUser.email}</Heading>
              <Button primary on onClick={() => setIsOpen(true)}>
                Update Profile
              </Button>
              <Heading h4>Change Password</Heading>
              <PasswordChangeForm />
              <Heading h4>Forgot Password</Heading>
              <PasswordForgetForm />
            </AccountContent>
          </PageContainer>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

const authCondition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(authCondition),
)(AccountPage);
