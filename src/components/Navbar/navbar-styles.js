import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #0f94d8;
`;
export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const LogoWrapper = styled.div`
  background-color: A9AFB5;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 10px;
`;

export const NavLinkWrapper = styled.div`
  height: 30px;
  width: 80px;
  /* background-color: white; */
  color: white;
  margin-left: 20px;
  margin-right: 20px;
`;
