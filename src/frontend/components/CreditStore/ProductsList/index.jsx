import React, { useState } from 'react';
import {
  Paper,
} from '@material-ui/core';
import setInputValue from '../../../hooks/useInputHandler';
import TableProducts from '../TableProducts';
import { useStyles } from './styles';
import { CheckDeleted } from './components/CheckDeleted';
import { AddProduct } from './components/AddProduct';
import { DeleteProduct } from './components/DeleteProduct';

const ProductList = (props) => {
  const classes = useStyles();

  const { player, handleRefreshPlayerSearch } = props;
  const [list, setList] = useState([]);
  const [isChecked, setIsChecked] = React.useState(false);

  const productValues = setInputValue({
    id: '',
    description: '',
    price: 0,
    amount: 1,
    subTotal: 0,
  });

  const productId = setInputValue({
    id: '',
  });

  const handleCleanList = () => setList([]);
  const isCheckedToDelete = (value) => setIsChecked(value);
  const addToList = (list) => setList(list);
  const newList = (list) => setList(list);

  return (
    <>
      <Paper className={classes.root}>
        {
          isChecked ? (
            <DeleteProduct
              productId={productId}
              newList={newList}
              list={list}
            />
          ) : (
            <AddProduct
              productValues={productValues}
              addToList={addToList}
              list={list}
            />
          )
        }
        <CheckDeleted values={isChecked} isCheckedToDelete={isCheckedToDelete} />
      </Paper>
      {/* Table of products added to change */}
      <TableProducts
        listOfProducts={list}
        player={player}
        handleCleanList={handleCleanList}
        handleRefreshPlayerSearch={handleRefreshPlayerSearch}
      />
    </>
  );
};

export default ProductList;
