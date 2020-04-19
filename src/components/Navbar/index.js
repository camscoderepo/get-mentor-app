import React from 'react';
import { AuthUserContext } from '../Session';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';
import { ReactComponent as MobileLogo } from '../../assets/svgs/mobile-logo.svg';
import {
  Header,
  NavContainer,
  LogoWrapper,
  NavLinkContainer,
  NavLinkWrapper,
  RegisterBtn,
  MobileLogoWrapper,
} from './navbar-styles';
import SignOutButton from '../SignOut';

import * as ROUTES from '../../constants/routes';

const linkStyle = {
  color: 'black',
  fontfamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: 14,
  lineHeight: '140%',
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
    <div>
      <MobileLogoWrapper>
        <Link to={ROUTES.HOME}>
          <MobileLogo />
        </Link>
      </MobileLogoWrapper>
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
              <Link style={linkStyle} to={ROUTES.ADMIN}>
                Admin
              </Link>
            </NavLinkWrapper>
            <NavLinkWrapper>
              <SignOutButton />
            </NavLinkWrapper>
          </NavLinkContainer>
        </NavContainer>
      </Header>
    </div>
  );
};
const NavigationNonAuth = () => {
  return (
    <div>
      <MobileLogoWrapper>
        <Link to={ROUTES.HOME}>
          <MobileLogo />
        </Link>
      </MobileLogoWrapper>
      <Header>
        <NavContainer>
          <LogoWrapper>
            <Link to={ROUTES.HOME}>
              <Logo />
            </Link>
          </LogoWrapper>
          <NavLinkContainer>
            <NavLinkWrapper>
              <Link style={linkStyle} to={ROUTES.MENTORS}>
                Mentors
              </Link>
            </NavLinkWrapper>
            <NavLinkWrapper>
              <Link style={linkStyle} to={ROUTES.SIGN_IN}>
                Log In
              </Link>
            </NavLinkWrapper>
            <RegisterBtn>
              <Link style={linkStyle} to={ROUTES.SIGN_UP}>
                Register
              </Link>
            </RegisterBtn>
          </NavLinkContainer>
        </NavContainer>
      </Header>
    </div>
  );
};
export default Navbar;
