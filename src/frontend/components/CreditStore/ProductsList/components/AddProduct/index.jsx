/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable radix */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  TextField,
  Button,
} from '@material-ui/core';
import { FormContainer, useStyles } from './styles';
import { Title } from '../../../../shared/Title';

export const AddProduct = (props) => {
  const classes = useStyles();
  const { productValues, addToList, list } = props;

  const isInTable = (productId) => {
    let exist = false;
    list.map(({ id }) => {
      if (productId === id) {
        exist = true;
      }
    });
    return exist;
  };

  const handlerAdd = () => {
    if (!isInTable(productValues.form.id)) {
      addToList([...list, { ...productValues.form,
        price: parseInt(productValues.form.price) < 0 ? 0 : parseInt(productValues.form.price),
        quantity: parseInt(productValues.form.quantity) < 1 ? 1 : parseInt(productValues.form.quantity),
        subTotal: parseInt(productValues.form.price) * parseInt(productValues.form.quantity) }]);
      productValues.form.id = '';
      productValues.form.product = '';
      productValues.form.price = 0;
      productValues.form.quantity = 1;
    } else {
    // setError(true);
    }
  };

  return (
    <FormContainer>
      <Title title='Agregar producto' />
      <>
        <TextField className={classes.space} label='Clave' {...productValues} name='id' value={productValues.form.id} />
        <TextField className={classes.space} label='producto' {...productValues} name='product' value={productValues.form.product} />
        <TextField className={classes.space} label='Precio' type='number' {...productValues} name='price' value={productValues.form.price < 0 ? 0 : productValues.form.price} />
        <TextField className={classes.space} label='Cantidad' type='number' {...productValues} name='quantity' value={productValues.form.quantity < 0 ? 1 : productValues.form.quantity} />
        <Button className={classes.space} variant='contained' color='primary' onClick={handlerAdd}>Agregar</Button>
      </>
    </FormContainer>
  );
};
