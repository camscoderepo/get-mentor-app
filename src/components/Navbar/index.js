import React from 'react';
import { AuthUserContext } from '../Session';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svgs/logo-placeholder.svg';
import {
  Header,
  NavContainer,
  LogoWrapper,
  NavLinkContainer,
  NavLinkWrapper,
} from './navbar-styles';
import SignOutButton from '../SignOut';

import * as ROUTES from '../../constants/routes';

const linkStyle = {
  color: 'white',
};

const Navbar = ({ authUser }) => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = () => {
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
            <Link style={linkStyle} to={ROUTES.ACCOUNT}>
              Account
            </Link>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <SignOutButton />
          </NavLinkWrapper>
        </NavLinkContainer>
      </NavContainer>
    </Header>
  );
};
const NavigationNonAuth = () => {
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
            <Link style={linkStyle} to={ROUTES.SIGN_IN}>
              Sign In
            </Link>
          </NavLinkWrapper>
        </NavLinkContainer>
      </NavContainer>
    </Header>
  );
};
export default Navbar;
