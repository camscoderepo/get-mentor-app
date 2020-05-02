import React, { useState } from 'react';
import { AuthUserContext } from '../Session';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import PageContainer from '../PageContainer';
import HeadingOne from '../Heading';
import { AccountContent } from './account-styles';
import Button from '../Button';
import Modal from '../Modal';
import ProfileForm from '../ProfileForm';
import Heading from '../Heading';

const AccountPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSaveClick = () => {
    handleClose();
    alert('Save Button Clicked');
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
            >
              <ProfileForm
                close={handleClose}
                handleSaveClick={handleSaveClick}
              />
            </Modal>
          )}
          <PageContainer>
            <AccountContent>
              <HeadingOne>Account: {authUser.email}</HeadingOne>
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
