import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import Product from '../../components/product/product.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpContainer } from './productos.styles';

const productosPage = () => (
  <SignInAndSignUpContainer>
    <Product />
  </SignInAndSignUpContainer>
);

export default productosPage;
