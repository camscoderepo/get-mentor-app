import React from 'react';
import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';
import { ReactComponent as MobileLogo } from '../../assets/svgs/mobile-logo.svg';
import { ReactComponent as HomeIcon } from '../../assets/svgs/home-icon.svg';
import { ReactComponent as HeartIcon } from '../../assets/svgs/heart.svg';
import { ReactComponent as ProfileIcon } from '../../assets/svgs/profile.svg';
import {
  Header,
  NavContainer,
  LogoWrapper,
  NavLinkContainer,
  NavLinkWrapper,
  RegisterBtn,
  MobileLogoWrapper,
  MobileSignInWrapper,
  MobileIconWrapper,
} from './navbar-styles';
import SignOutButton from '../SignOut';

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
        authUser ? (
          <NavigationAuth authUser={authUser} />
        ) : (
          <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = ({ authUser }) => {
  return (
    <div>
      <MobileLogoWrapper>
        <Link to={ROUTES.LANDING}>
          <MobileLogo />
        </Link>
      </MobileLogoWrapper>
      <MobileSignInWrapper>
        <Link to={ROUTES.SIGN_IN}>Log Out</Link>
      </MobileSignInWrapper>
      <Header>
        <NavContainer>
          <LogoWrapper>
            <Link to={ROUTES.LANDING}>
              <Logo />
            </Link>
          </LogoWrapper>
          <NavLinkContainer>
            <MobileIconWrapper>
              <Link style={linkStyle} to={ROUTES.HOME}>
                <HomeIcon />
              </Link>
            </MobileIconWrapper>
            <NavLinkWrapper>
              <Link style={linkStyle} to={ROUTES.HOME}>
                Home
              </Link>
            </NavLinkWrapper>
            <MobileIconWrapper>
              <Link style={linkStyle} to={ROUTES.MENTORS}>
                <HeartIcon />
              </Link>
            </MobileIconWrapper>
            <NavLinkWrapper>
              <Link style={linkStyle} to={ROUTES.MENTORS}>
                Mentors
              </Link>
            </NavLinkWrapper>
            <MobileIconWrapper>
              <Link style={linkStyle} to={ROUTES.ACCOUNT}>
                <ProfileIcon />
              </Link>
            </MobileIconWrapper>
            <NavLinkWrapper>
              <Link style={linkStyle} to={ROUTES.ACCOUNT}>
                Account
              </Link>
            </NavLinkWrapper>
            <NavLinkWrapper>
              {!!authUser.roles[ROLES.MENTOR] && (
                <Link style={linkStyle} to={ROUTES.ADMIN}>
                  Admin
                </Link>
              )}
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
        <Link to={ROUTES.LANDING}>
          <MobileLogo />
        </Link>
      </MobileLogoWrapper>
      <MobileSignInWrapper>
        <Link to={ROUTES.SIGN_IN}>Log In</Link>
      </MobileSignInWrapper>
      <Header>
        <NavContainer>
          <LogoWrapper>
            <Link to={ROUTES.LANDING}>
              <Logo />
            </Link>
          </LogoWrapper>
          <MobileIconWrapper>
            <Link style={linkStyle} to={ROUTES.HOME}>
              <HomeIcon />
            </Link>
          </MobileIconWrapper>
          <NavLinkContainer>
            <NavLinkWrapper>
              <Link style={linkStyle} to={ROUTES.HOME}>
                Home
              </Link>
            </NavLinkWrapper>
            <MobileIconWrapper>
              <Link style={linkStyle} to={ROUTES.MENTORS}>
                <HeartIcon />
              </Link>
            </MobileIconWrapper>
            <NavLinkWrapper>
              <Link style={linkStyle} to={ROUTES.MENTORS}>
                Mentors
              </Link>
            </NavLinkWrapper>
            <MobileIconWrapper>
              <Link style={linkStyle} to={ROUTES.ACCOUNT}>
                <ProfileIcon />
              </Link>
            </MobileIconWrapper>
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
