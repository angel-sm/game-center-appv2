/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';

export const CheckDeleted = (props) => {
  const { values, isCheckedToDelete } = props;
  console.log(values);

  return (
    <FormControlLabel
      control={(
        <Checkbox
          checked={values}
          onChange={(event) => isCheckedToDelete(event.target.checked)}
          color='primary'
        />
      )}
      label='Eliminar producto'
    />
  );
};
