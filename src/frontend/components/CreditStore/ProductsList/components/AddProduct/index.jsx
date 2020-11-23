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
        amount: parseInt(productValues.form.amount) < 1 ? 1 : parseInt(productValues.form.amount),
        subTotal: parseInt(productValues.form.price) * parseInt(productValues.form.amount) }]);
      productValues.form.id = '';
      productValues.form.description = '';
      productValues.form.price = 0;
      productValues.form.amount = 1;
    } else {
      setError(true);
    }
  };

  return (
    <FormContainer>
      <Title title='Agregar producto' />
      <>
        <TextField className={classes.space} label='Clave' {...productValues} name='id' value={productValues.form.id} />
        <TextField className={classes.space} label='Descripcion' {...productValues} name='description' value={productValues.form.description} />
        <TextField className={classes.space} label='Precio' type='number' {...productValues} name='price' value={productValues.form.price < 0 ? 0 : productValues.form.price} />
        <TextField className={classes.space} label='Cantidad' type='number' {...productValues} name='amount' value={productValues.form.amount < 0 ? 1 : productValues.form.amount} />
        <Button className={classes.space} variant='contained' color='primary' onClick={handlerAdd}>Agregar</Button>
      </>
    </FormContainer>
  );
};
