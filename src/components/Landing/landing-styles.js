import styled from 'styled-components';

export const LandingPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding-top: 5%;
  height: 100vh;
`;

export const LandingPageHeading = styled.h1`
  font-size: 60px;
  font-family: Mr Eaves Mod OT;
  font-weight: 300;

  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

export const LandingRegisterBtn = styled.div`
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
    margin-top: 30%;
    /* display: none; */
  }
`;
