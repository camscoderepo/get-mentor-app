import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 600;
  background-color: white;

  /* medaia queries */
  @media screen and (max-width: 600px) {
    position: fixed;
    left: 0;
    right: 0;
    top: auto;
    bottom: 0;
    /* background-color: #0f94d8; */
    background: #ffffff;
    box-shadow: 0px 0px 14px rgba(121, 136, 149, 0.25);
    border-radius: 31px 31px 0px 0px;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 4.2% 0 4.2%;
  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;
export const LogoWrapper = styled.div`
  margin-top: 26px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const MobileLogoWrapper = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    position: absolute;
    top: 16px;
    left: 16px;
    bottom: auto;
    right: auto;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  @media screen and (max-width: 600px) {
    justify-content: space-around;
  }
`;

export const NavLinkWrapper = styled.div`
  margin-left: 31px;
  @media screen and (max-width: 600px) {
    margin: 0;
    display: none;
  }
`;

export const RegisterBtn = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 14px;
  background: #f5c341;
  border-radius: 4px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  margin-left: 31px;

  @media screen and (max-width: 600px) {
    margin: 0;
    display: none;
  }
`;

export const MobileIconWrapper = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const MobileSignInWrapper = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    position: absolute;
    top: 16px;
    right: 16px;
    bottom: auto;
    left: auto;
  }
`;
