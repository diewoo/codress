import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart, logoutUser } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/codresslogo.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart, logoutUser }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>TIENDA</OptionLink>
      {/* <OptionLink to='/shop'>CONTACTO</OptionLink> */}
      {currentUser ? (
        <OptionLink as='div' onClick={logoutUser}>
          SALIR
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>INGRESAR</OptionLink>
      )}
      <OptionLink to='/productos'>PRODUCTO</OptionLink>
      <OptionLink to='/shop'>RECOMENDACION</OptionLink>
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
  logoutUser: () => dispatch(logoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
