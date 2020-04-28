import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {
  LandingPageContainer,
  LandingPageHeading,
} from './landing-styles';
import Button from '../Button';

const linkStyle = { color: 'black' };

const LandingPage = () => (
  <LandingPageContainer>
    <LandingPageHeading>Landing Page</LandingPageHeading>
    <Button inverse big hidemobile>
      <Link style={linkStyle} to={ROUTES.SIGN_UP}>
        {' '}
        Register me to start mentoring or ask for help
      </Link>
    </Button>
    <Button primary hidedesktop>
      <Link style={linkStyle} to={ROUTES.SIGN_UP}>
        {' '}
        Register Me
      </Link>
    </Button>
  </LandingPageContainer>
);

export default LandingPage;
