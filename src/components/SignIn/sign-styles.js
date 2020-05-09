import styled from 'styled-components';

export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* justify-content: center;
  align-items: center; */}
  padding-left: 5%;
  padding-top: 5%;
  height: 100vh;
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const SignInFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
`

export const SignInContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const GoogleSignInBtn = styled.img`
  cursor: pointer;
`;

export const GoogleBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: -160px;
`
export const SignInImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: 726px;
`

export const StyledSpan = styled.span`
  text-align: center;
  margin-top: 40px;
`

export const CheckboxWrapper = styled.div`
  margin-top: 24px;
  padding-bottom: 50px;
`;
export const SignInText = styled.p`
  color: #798895;
  line-height: 1.4;
  font-size: 20px;
  font-family: Inter;
`;

export const signBtnStyle = {
  height: '60px'
  
}