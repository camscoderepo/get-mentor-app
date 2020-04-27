import React from 'react';
import { ReactComponent as FooterLogo } from '../../assets/svgs/logo-namjai.svg';
import {
  FooterWrapper,
  FooterNavContainer,
  FooterLogoWrapper,
  FooterNavLinks,
  FooterLink,
} from './footer-styles';

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <FooterNavContainer>
          <FooterLogoWrapper>
            <FooterLogo />
          </FooterLogoWrapper>
          <FooterNavLinks>
            <FooterLink>Mentors</FooterLink>
            <FooterLink>FAQs</FooterLink>
            <FooterLink>About us</FooterLink>
          </FooterNavLinks>
        </FooterNavContainer>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
