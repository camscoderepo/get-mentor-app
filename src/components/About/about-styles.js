import styled from 'styled-components';

export const AboutPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f2f2f2;
  height: 100vh;
`;

export const AboutPageHeading = styled.h1`
  font-size: 60px;
  font-family: Mr Eaves Mod OT;
  font-weight: 300;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`;
