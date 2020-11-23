/* eslint-disable no-const-assign */
/* eslint-disable array-callback-return */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  TextField,
  Button,
} from '@material-ui/core';
import { FormContainer, useStyles } from './styles';
import { Title } from '../../../../shared/Title';

export const DeleteProduct = (props) => {
  const classes = useStyles();

  const { list, newList, productId } = props;

  const deleteProduct = () => {
    list.map(({ id }, i) => {
      if (productId.form.id === id) {
        list.splice(i, 1);
        newList([...list]);
      }
    });
    productId.form.id = '';
  };

  console.log(productId, props);
  return (
    <FormContainer>
      <Title title='Eliminar producto' />
      <>
        <TextField className={classes.space} label='Clave' {...productId} name='id' value={productId.form.id} />
        <Button className={classes.space} variant='contained' color='secondary' onClick={deleteProduct}>Eliminar</Button>
      </>
    </FormContainer>
  );
};
