import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
  loginUser 
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart , loginUser }) => {
  const [userCredentials, setCredentials] = useState({
    email: 'prueba12344@gmail.com',
    password: '123456',
    errors: {}
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    //emailSignInStart(email, password);
    loginUser (email,password)
    
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>Ya tengo una cuenta</SignInTitle>
      <span>Ingresar con tu email y password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'> INGRESAR </CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Ingresar con Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  loginUser: (email, password) => dispatch(loginUser({ email, password })),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});


export default connect(
  null,
  mapDispatchToProps
)(SignIn);
