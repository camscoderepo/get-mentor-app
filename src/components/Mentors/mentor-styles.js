import styled from 'styled-components';

export const MentorsPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  height: 100vh;
  @media screen and (max-width: 600px) {
    height: auto;
    padding-top: 10%;
  }
`;

export const MentorsPageHeading = styled.h1`
  font-size: 60px;
  font-family: Mr Eaves Mod OT;
  font-weight: 300;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`;
