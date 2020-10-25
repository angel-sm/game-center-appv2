/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Button,
  TextField,
  Paper,
  Toolbar,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import setInputValue from '../../../hooks/useInputHandler';
import TableProducts from '../TableProducts';
import { useStyles } from './styles';

const ProductList = (props) => {
  const { player } = props;
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isError, setError] = useState(false);
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDeleted(false);
    }, 2000);
  }, [isDeleted]);

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 2000);
  }, [isError]);

  const productValues = setInputValue({
    id: '',
    description: '',
    price: 0,
    amount: 1,
    subTotal: 0,
  });

  const deleteId = setInputValue({
    toDelete: '',
  });

  const handleCleanList = () => {
    setList([]);
  };

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
      setList([...list, { ...productValues.form,
        price: parseInt(productValues.form.price),
        amount: parseInt(productValues.form.amount),
        subTotal: parseInt(productValues.form.price) * parseInt(productValues.form.amount) }]);
      productValues.form.id = '';
      productValues.form.description = '';
      productValues.form.price = 0;
      productValues.form.amount = 1;
    } else {
      setError(true);
    }
  };

  const deleteProduct = () => {
    let isError = true;
    list.map(({ id }, i) => {
      if (deleteId.form.toDelete === id) {
        list.splice(i, 1);
        setList([...list]);
        setIsDeleted(true);
        isError = false;
      }
    });
    if (isError) {
      setError(true);
    }
    deleteId.form.toDelete = '';
  };

  return (
    <>
      <FormControlLabel
        control={(
          <Checkbox
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
            color='primary'
          />
        )}
        label='Eliminar producto'
      />
      {
        checked ? (
          <Paper className={classes.root}>
            <Toolbar>
              <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
                Eliminar producto
              </Typography>
            </Toolbar>
            <>
              <TextField className={classes.formChild} label='Clave' {...deleteId} name='toDelete' value={deleteId.form.toDelete} />
              <Button className={classes.formChild} variant='contained' color='secondary' onClick={deleteProduct}>Eliminar</Button>
              {
                isDeleted ? <span>Se elimino el producto correctamente </span> : null
              }
              {
                isError ? <span>Error al eliminar el producto</span> : null
              }
            </>
          </Paper>
        ) : (
          <Paper className={classes.root}>
            <Toolbar>
              <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
                Agregar producto
              </Typography>
            </Toolbar>
            <>
              <TextField className={classes.formChild} label='Clave' {...productValues} name='id' value={productValues.form.id} />
              <TextField className={classes.formChild} label='Descripcion' {...productValues} name='description' value={productValues.form.description} />
              <TextField className={classes.formChild} label='Precio' type='number' {...productValues} name='price' value={productValues.form.price < 0 ? 0 : productValues.form.price} />
              <TextField className={classes.formChild} label='Cantidad' type='number' {...productValues} name='amount' value={productValues.form.amount <= 0 ? 1 : productValues.form.amount} />
              <Button className={classes.formChild} variant='contained' color='primary' onClick={handlerAdd}>Agregar</Button>
              {
                isError ? <span>Producto con clave ya existente</span> : null
              }
            </>
          </Paper>
        )
      }
      {/* Table of products added to change */}
      <TableProducts listOfProducts={list} player={player} handleCleanList={handleCleanList} />
    </>
  );
};

export default ProductList;
