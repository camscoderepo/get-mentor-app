import React from 'react';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';

import { HomePageContainer, HomePageHeading } from './home-styles';

const HomePage = () => {
  return (
    <div>
      <HomePageContainer>
        <HomePageHeading>
          Home Page is accessible by signed in user
        </HomePageHeading>
      </HomePageContainer>
    </div>
  );
};

const condition = (authUser) => !!authUser;
export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
