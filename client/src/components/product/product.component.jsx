import React, { useState } from 'react';

import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import {ProductContainer} from './product.styles'
import { productStart } from '../../redux/products/product.actions';

const Product = ({productStart}) => {
    const [userProduct, setUserProduct] = useState({
        imageUrl: '',
        name: '',
        price: '',
        userName: ''
      });
const { imageUrl, name, price, userName } = userProduct;
const handleSubmit = async event => {
    event.preventDefault();
    productStart({ imageUrl, name, price,userName });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserProduct({ ...userProduct, [name]: value });
  };
    return(
        <ProductContainer>
             <span>Ingresar producto</span>
             <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                type='text'
                name='imageUrl'
                value={imageUrl}
                onChange={handleChange}
                label='Url Producto'
                required
                />
                <FormInput
                type='text'
                name='name'
                value={name}
                onChange={handleChange}
                label='Nombres'
                required
                />
                <FormInput
                type='number'
                name='price'
                value={price}
                onChange={handleChange}
                label='Precio'
                required
                />
            <CustomButton type='submit'>SUBIR PRODUCTO</CustomButton>
            </form>
        </ProductContainer>
    )
}
const mapDispatchToProps = dispatch => ({
  productStart: userProduct => dispatch(productStart(userProduct))
});

export default connect(
  null,
  mapDispatchToProps
)(Product);