import React, { Component, useState } from 'react';
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

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

// const [form, setValues] = useState({
//   email: '',
//   password: '',
//   error: null
// })

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

// export default function SignInFormBase() {
//   const [state, setState] = useState();
//   const [email, setEmail ] = useState();
//   const [password, setPassword] = useState();

//   const onSubmit = (event) => {
    
//     setEmail(firebase)
//       .doSignInWithEmail(email)
//       .then(() => {
//         setState({ state });
//         history.push(ROUTES.HOME);
//       })
//       .catch((error) => {
//         setState({ error });
//       });

//     setPassword(firebase)
//       .doSignInWithPassword(password)
//       .then(() => {
//         setState({ state });
//         this.props.history.push(ROUTES.HOME);
//       })
//       .catch((error) => {
//         setState({ error });
//       });

//     event.preventDefault();
//   };

//   const onChange = (event) => {
//     setState({ [event.target.name]: event.target.value });
//   };


//     const { email, password, error } = this.state;

//     const isInvalid = password === '' || email === '';

//     return (
//       <form onSubmit={onSubmit}>
//         <input
//           name="email"
//           value={email}
//           onChange={onChange}
//           type="text"
//           placeholder="Email Address"
//         />
//         <input
//           name="password"
//           value={password}
//           onChange={onChange}
//           type="password"
//           placeholder="Password"
//         />
//         <button disabled={isInvalid} type="submit">
//           Sign In
//         </button>

//         {error && <p>{error.message}</p>}
//       </form>
//     );
//   }


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

// export default function SignInGoogleBase() {
//  const [state, setState] = useState();
//  const [error, setError] = useState();

//   const onSubmit = (event) => {
//     setError(firebase)
//       .doSignInWithGoogle()
//       .then((socialAuthUser) => {
//         // Create a user in your Firebase Realtime Database too
//         return firebase.user(socialAuthUser.user.uid).set({
//           username: socialAuthUser.user.displayName,
//           email: socialAuthUser.user.email,
//           roles: {},
//         });
//       })
//       .then((socialAuthUser) => {
//         this.setState({ error: null });
//         this.props.history.push(ROUTES.HOME);
//       })
//       .catch((error) => {
//         if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
//           error.message = ERROR_MSG_ACCOUNT_EXISTS;
//         }
//         this.setState({ error });
//       });
//     event.preventDefault();
//   };
//   render() {
//     const { error } = this.state;
//     return (
//       <form onSubmit={this.onSubmit}>
//         <h4>Sign With Google</h4>
//         <button type="submit">Sign In with Google</button>

//         <h4> Sign In With Email</h4>
//         {error && <p>{error.message}</p>}
//       </form>
//     );
//   }
// }

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

export default SignInPage;

export { SignInForm, SignInGoogle };
