import React, { useState, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { SignInWrapper } from './sign-styles';
const SignInPage = () => (
  <div>
    <SignInWrapper>
      <h1>SignIn</h1>
      <SignInGoogle />
      <SignInForm />
      <PasswordForgetLink />
      <SignUpLink />
    </SignInWrapper>
  </div>
);

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

// CHANGE 1 we will use hooks to manage or initial state in component
// const INITIAL_STATE = {
//   email: '',
//   password: '',
//   error: null,
// };

// CHANGE 2 convert to functional component I prefer arrow functions in this case.
const SignInFormBase = (props) => {
  //CHANGE 3 we will manage our initial state with hooks notice we set default values here
  // constructor(props) {
  //   super(props);

  //   this.state = { ...INITIAL_STATE };
  // }
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  //CHANGE 4 need to declare methods as a constant also note how we destructered below
  const onSubmit = (event) => {
    const { email, password } = formState;

    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      // CHANGE 5 this is how we handle the promise we are just resetting to initial formState here.
      .then(() => {
        setFormState({
          email: '',
          password: '',
        });
        props.history.push(ROUTES.HOME);
      })
      // .then(() => {
      //   this.setState({ ...INITIAL_STATE });
      //   this.props.history.push(ROUTES.HOME);
      // })
      .catch((error) => {
        //CHANGE 6  set the error state
        // this.setState({ error });
        setError({ error });
      });

    event.preventDefault();
  };

  const onChange = (event) => {
    //CHANGE 7 refactor to use our state managed in hooks
    // this.setState({ [event.target.name]: event.target.value });
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  //CHANGE 8 there is no render method in functional components just return

  const isInvalid =
    formState.password === '' || formState.email === '';
  //CHANGE 9 we no longer need this keyord to refer to methods in an arrow function
  //that is one of the nice features that you get in an arrow function
  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={formState.email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={formState.password}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />
      <button disabled={isInvalid} type="submit">
        Sign In
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  onSubmit = (event) => {
    this.props.firebase
      .doSignInWithGoogle()
      .then((socialAuthUser) => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: {},
        });
      })
      .then((socialAuthUser) => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        this.setState({ error });
      });
    event.preventDefault();
  };
  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h4>Sign With Google</h4>
        <button type="submit">Sign In with Google</button>

        <h4> Sign In With Email</h4>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

export default SignInPage;

export { SignInForm, SignInGoogle };
