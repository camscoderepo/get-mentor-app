import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Button from '../Button';
import PageContainer from '../PageContainer';
import HeadingOne from '../Heading';
import LovingDude from '../../assets/svgs/loving.svg';
import {
  HeroContainer,
  HeroContentRight,
  HeroContentLeft,
  linkStyle,
  HeroImgWrapper,
  btnOveride,
  LandingMentorsContainer,
  MentorsHeading,
  MentorsWrapper,
  TempMentor,
  MentorsBtnWrapper,
} from './landing-styles';

const LandingPage = () => (
  <PageContainer>
    <HeroContainer>
      <HeroContentLeft>
        <HeadingOne>
          Connecting people to <br></br>improve their lives
        </HeadingOne>
        <p>
          Do you want be a Mentor? Or do you need help with something?
          Maybe both? This is the place for you. We connect people
          that just look to help eachother for the pleasure of doing
          it. And all for free.
        </p>
        <Button inverse big hidemobile>
          <Link style={linkStyle} to={ROUTES.SIGN_UP}>
            {' '}
            Register me to start mentoring or ask for help
          </Link>
        </Button>
        <Button primary hidedesktop style={btnOveride}>
          <Link style={linkStyle} to={ROUTES.SIGN_UP}>
            {' '}
            Register Me
          </Link>
        </Button>
      </HeroContentLeft>
      <HeroContentRight>
        <HeroImgWrapper src={LovingDude} />
      </HeroContentRight>
    </HeroContainer>
    <LandingMentorsContainer>
      <MentorsHeading>Our New Mentors</MentorsHeading>
      <MentorsWrapper>
        <TempMentor />
        <TempMentor />
        <TempMentor />
        <TempMentor />
      </MentorsWrapper>
      <MentorsBtnWrapper>
        <Button inverse>See All Mentors</Button>
      </MentorsBtnWrapper>
    </LandingMentorsContainer>
  </PageContainer>
);

export default LandingPage;
