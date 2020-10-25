/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  IconButton,
} from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';

export default function CreditButton(props) {
  const { player, maxofcredit } = props;
  return (
    <div>
      <IconButton color='primary' aria-label='ir a ventas' {...props}>
        <Link to={`/credit?player=${player}&credit=${maxofcredit}&from=${true}`}>
          <StorefrontIcon />
        </Link>
      </IconButton>
    </div>
  );
}
