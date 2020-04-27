import styled from 'styled-components';

export const HomePageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  height: 100vh;
  @media screen and (max-width: 600px) {
    padding-top: 10%;
    margin-top: 25%;
    height: 800px;
  }
`;

export const HomePageHeading = styled.h1`
  font-size: 60px;
  font-family: Mr Eaves Mod OT;
  font-weight: 300;

  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`;
