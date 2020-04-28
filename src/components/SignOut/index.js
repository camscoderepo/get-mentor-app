import React from 'react';
import { withFirebase } from '../Firebase';
import Button from '../Button';

const SignOutButton = ({ firebase }) => (
  <Button primary onClick={firebase.doSignOut}>
    LogOut
  </Button>
);
export default withFirebase(SignOutButton);
