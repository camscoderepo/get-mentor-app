import React from 'react';
import { HomePageContainer, HomePageHeading } from './home-styles';

const HomePage = () => {
  return (
    <div>
      <HomePageContainer>
        <HomePageHeading>Home Page</HomePageHeading>
      </HomePageContainer>
    </div>
  );
};

const condition = (authUser) => !!authUser;
export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
