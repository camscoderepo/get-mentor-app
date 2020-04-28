import styled from 'styled-components';

export const FooterWrapper = styled.div`
  position: fixed;
  top: auto;
  bottom: 0;
  left: 0;
  min-height: 100px;
  max-height: 15%;
  width: 100%;
  background-color: #f5c341;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const FooterNavContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 4.2%;
`;

export const FooterLogoWrapper = styled.div`
  margin-top: 2px;
`;

export const FooterNavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 40px;
  margin-top: 12px;
`;

export const FooterLink = styled.div`
  margin-left: 31px;
  @media screen and (max-width: 600px) {
    margin: 0;
  }
`;
