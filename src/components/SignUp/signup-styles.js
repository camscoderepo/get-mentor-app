import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  /* justify-content: center;
  align-items: center; */
  /* height: 100vh; */
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 450px;
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
  margin-top: 40px;
  cursor: pointer;
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const RegisterImg = styled.img`
  max-width: 80%;
  padding-left: 50%;
`;
