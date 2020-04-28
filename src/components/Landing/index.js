import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Button from '../Button';
import PageContainer from '../PageContainer';
import HeadingOne from '../Heading';

const linkStyle = { color: 'black' };

const LandingPage = () => (
  <PageContainer>
    <HeadingOne>Landing Page</HeadingOne>
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
  </PageContainer>
);

export default LandingPage;
