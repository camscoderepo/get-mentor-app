import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4.2%;
  margin-bottom: 20%;
  @media screen and (max-width: 768px) {
    margin-bottom: 40%;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 450px;

  @media screen and (max-width: 768px) {
    width: 80%;
    max-width: 80%;
  }
`;

export const Errors = styled.div`
  color: tomato;
  margin-bottom: 10px;
  height: 8px;
  font-size: 13px;
`;

export const Button = styled.button`
  height: 42px;
  min-width: 150px;
  border-radius: 10px;
  border: none;
  background-color: #f5c341;
  font-weight: 'semi-bold';
  text-transform: uppercase;
  font-size: 18px;
  font-family: 'Inter';
  cursor: pointer;
  color: white;

  &:hover {
    background-color: rgb(128, 181, 250);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
export const PasswordWrapper = styled.div`
  position: relative;
`;

export const EyeIconImg = styled.img`
  position: absolute;
  top: 38px;
  right: -23px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const CheckboxWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 36px;
`;

export const GoogleSignUpBtn = styled.img`
  cursor: pointer;
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-bottom: 20px;
    width: 80%;
  }
`;

export const RegisterImg = styled.img`
  max-width: 80%;
  max-height: 95%;
  margin-top: 3.5%;
`;

export const GoogleBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

//  @media screen and (max-width: 600px) {}
