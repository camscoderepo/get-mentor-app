import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {
  LandingPageContainer,
  LandingPageHeading,
  LandingRegisterBtn,
} from './landing-styles';

const LandingPage = () => (
  <LandingPageContainer>
    <LandingRegisterBtn>
      <Link to={ROUTES.SIGN_UP}>Register</Link>
    </LandingRegisterBtn>
    <LandingPageHeading>Landing Page</LandingPageHeading>
  </LandingPageContainer>
);

export default LandingPage;
