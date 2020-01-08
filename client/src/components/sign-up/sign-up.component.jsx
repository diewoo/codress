import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart, signupUser } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';
const SignUp = ({ signUpStart, signupUser }) => {
  const [userCredentials, setUserCredentials] = useState({
    handle: 'diego2122',
    email: 'prueba126644@gmail.com',
    password: '123456',
    confirmPassword: '123456',
    errors: {}
  });

  const { handle, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    // signUpStart({ displayName, email, password });
    signupUser(userCredentials);
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>No tengo una cuenta</SignUpTitle>
      <span>Ingresar con tu email y password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='handle'
          value={handle}
          onChange={handleChange}
          label='Nombres'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirmar Password'
          required
        />
        <CustomButton type='submit'>REGISTRARSE</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
  signupUser: userCredentials => dispatch(signupUser(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
