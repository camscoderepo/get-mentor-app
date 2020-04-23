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
  FormWrapper,
  Button,
  Errors,
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
    const roles = {};

    if (isMentor) {
      roles[ROLES.MENTOR] = ROLES.MENTOR;
    }
    props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        props.firebase
          .user(authUser.user.uid)
          .set({
            email,
            roles,
          })
          .then(() => {
            setEmail('');
            setPasswordOne('');
            setIsMentor(false);
            props.history.push(ROUTES.HOME);
          })
          .catch((error) => {
            setError({ error });
          });
      })
      .catch((error) => {
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
        <Button type="submit" disabled={isValid}>
          Register me!
        </Button>
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
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: {},
        });
      })
      .then((socialAuthUser) => {
        setError(null);
        props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
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
