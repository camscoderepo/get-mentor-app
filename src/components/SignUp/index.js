import React, { useState, useEffect } from 'react';
import InputFloatLabel from '../Input';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
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
  Span,
} from './signup-styles';
import EyeIcon from '../../assets/images/eye.png';
import GoogleSignUp from '../../assets/svgs/google-sign-up.svg';
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
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordOne, setPasswordOne] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState(false);

  const onSubmit = (event) => {
    props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        props.firebase
          .user(authUser.user.uid)
          .set({
            email,
          })
          .then(() => {
            setEmail('');
            setPasswordOne('');
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
  const showEye = true;
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPasswordOne(e.target.value);
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
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
          showEye={showEye}
          value={passwordOne}
          onChange={handlePassword}
        />
        <EyeIconImg src={EyeIcon} onClick={togglePasswordVisiblity} />
      </PasswordWrapper>
      <CheckboxWrapper>
        <label>
          <CheckBox
            checked={checked}
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
      <GoogleSignUpBtn src={GoogleSignUp} />
    </FormWrapper>
  );
};

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpHooks));

export default SignUpPage;

export { SignUpForm, SignUpLink };
