import styled from 'styled-components';

export const linkStyle = { color: 'black' };
export const btnOveride = { margin: '0' };

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 60px;
  padding-right: 60px;
  max-width: 100vw;
  @media screen and (max-width: 1100px) {
    margin-top: 5%;
  }
  @media screen and (max-width: 768px) {
    margin-top: 10%;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
  }
  @media screen and (max-width: 400px) {
    padding-top: 8%;
  }
`;

export const HeroContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 490px;
  max-width: 90%;
  height: 300px;
  margin-top: 2.2%;
  @media screen and (max-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const HeroContentRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -4%;
  max-height: 400px;
`;

export const HeroImgWrapper = styled.img`
  height: 100%;
  width: 100%;
`;

export const LandingMentorsContainer = styled.div`
  background-color: #f0f4f7;
  margin-bottom: 115px;
  padding: 50px;
  @media screen and (max-width: 768px) {
    padding: 50px 0 50px 0;
  }
  @media screen and (max-width: 600px) {
    padding-bottom: 150px;
    padding-left: 2%;
    padding-right: 2%;
    margin-bottom: 20px;
  }
`;
export const MentorsHeading = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    margin-left: 70px;
  }
`;
export const MentorsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 10%;
  }
`;
export const TempMentor = styled.div`
  background-color: white;
  height: 286px;
  width: 315px;
  margin: 10px;
`;
export const MentorsBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
