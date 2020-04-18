import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svgs/logo-placeholder.svg';
import {
  Header,
  NavContainer,
  LogoWrapper,
  NavLinkContainer,
  NavLinkWrapper,
} from './navbar-styles';

import * as ROUTES from '../../constants/routes';

const linkStyle = {
  color: 'white',
};

const Navbar = () => {
  return (
    <Header>
      <NavContainer>
        <LogoWrapper>
          <Link to={ROUTES.HOME}>
            <Logo />
          </Link>
        </LogoWrapper>
        <NavLinkContainer>
          <NavLinkWrapper>
            <Link style={linkStyle} to={ROUTES.ABOUT}>
              About
            </Link>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <Link style={linkStyle} to={ROUTES.MENTORS}>
              Mentors
            </Link>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <Link style={linkStyle} to={ROUTES.SIGN_UP}>
              Sign In
            </Link>
          </NavLinkWrapper>
        </NavLinkContainer>
      </NavContainer>
    </Header>
  );
};

export default Navbar;
