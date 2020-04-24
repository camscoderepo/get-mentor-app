import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import InputFloatLabel from '../Input';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import { validateEmail } from '../../utils/ValidateEmail';
import CheckBox from '../Checkbox';
import {
  Button,
  Errors,
  FormWrapper,
  EyeIconImg,
  PasswordWrapper,
  SignUpWrapper,
  CheckboxWrapper,
  GoogleSignUpBtn,
  RegisterImg,
  ContentWrapper,
  GoogleBtnWrapper,
} from './signup-styles';
import EyeIcon from '../../assets/images/eye.png';
import GoogleSignUp from '../../assets/svgs/google-sign-up.svg';
import RegisterSvg from '../../assets/svgs/REGISTER.svg';
// import usePasswordValidator from '../PasswordValidator';

const SignUpPage = () => (
  <div>
    <SignUpWrapper>
      <h1>Register</h1>
      <SignUpForm />
    </SignUpWrapper>
  </div>
);

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

const SignUpHooks = (props) => {
  const [isValid, setIsValid] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isMentor, setIsMentor] = useState(false);
  const [email, setEmail] = useState('');
  const [passwordOne, setPasswordOne] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState(false);

  const onSubmit = (event) => {
    const roles = [];

    if (isMentor) {
      roles.push(ROLES.MENTOR);
    }
    props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        return props.firebase.user(authUser.user.uid).set({
          email,
          roles,
        });
      })
      // .then(() => {
      //   return props.firebase.doSendEmailVerification();
      // })
      .then(() => {
        setEmail('');
        setPasswordOne('');
        setIsMentor(false);
        props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        setError({ error });
      });

    event.preventDefault();
  };

  const togglePasswordVisiblity = () => {
    setShowPassword(!showPassword);
  };

  // useEffect(() => {
  //   if (!state.email) {
  //     setEmailError('');
  //   } else {
  //     if (validateEmail(state.email)) {
  //       setEmailError('');
  //     } else {
  //       setEmailError('Please enter a valid email.');
  //     }
  //   }
  // }, [state.email]);

  // const checkValid = () => {
  //   if (
  //     state.passwordOne !== state.passwordTwo ||
  //     state.passwordOne === '' ||
  //     state.email === '' ||
  //     state.username === ''
  //   ) {
  //     setIsValid(false);
  //   } else {
  //     setIsValid(true);
  //   }
  // };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPasswordOne(e.target.value);
  };
  const handleCheckboxChange = () => {
    setChecked(!checked);
    if (checked === false) {
      setIsMentor(true);
    }
  };
  return (
    <ContentWrapper>
      <FormWrapper onSubmit={onSubmit}>
        <InputFloatLabel
          name="email"
          label="Email"
          type="email"
          value={email}
          onChange={handleEmail}
        />
        {/* <Errors>{emailError}</Errors> */}
        <PasswordWrapper>
          <InputFloatLabel
            name="passwordOne"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={passwordOne}
            onChange={handlePassword}
          />
          <EyeIconImg
            src={EyeIcon}
            onClick={togglePasswordVisiblity}
          />
        </PasswordWrapper>
        <CheckboxWrapper>
          <label>
            <CheckBox
              checked={checked}
              isMentor={isMentor}
              onChange={handleCheckboxChange}
            />
            <span style={{ marginLeft: 8 }}>
              Register me as a Mentor
            </span>
          </label>
        </CheckboxWrapper>
        {/* <Errors>{}</Errors> */}
        <Button type="submit">Register me!</Button>
        <span style={{ textAlign: 'center', marginTop: 40 }}>Or</span>
        <SignUpGoogle />
      </FormWrapper>
      <div>
        <RegisterImg src={RegisterSvg} />
      </div>
    </ContentWrapper>
  );
};

const SignUpGoogleBase = (props) => {
  const [error, setError] = useState(null);

  const onSubmit = (event) => {
    props.firebase
      .doSignInWithGoogle()
      .then((socialAuthUser) => {
        // Create a user in your Firebase Realtime Database too
        return props.firebase.user(socialAuthUser.user.uid).set({
          email: socialAuthUser.user.email,
          roles: [],
        });
      })
      .then((socialAuthUser) => {
        setError(null);
        props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        setError(error);
      });
  };
  const handleGoogleClicked = () => {
    onSubmit();
  };
  return (
    <GoogleBtnWrapper>
      <GoogleSignUpBtn
        src={GoogleSignUp}
        onClick={handleGoogleClicked}
      />
      {error && <p>{error.message}</p>}
    </GoogleBtnWrapper>
  );
};

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpHooks));
const SignUpGoogle = compose(
  withRouter,
  withFirebase,
)(SignUpGoogleBase);

export default SignUpPage;

export { SignUpForm, SignUpLink, SignUpGoogle };
