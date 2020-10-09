import React from 'react';
import Bar from './styles';

const ErrorBar = ({ error }) => {
  return (
    <Bar error={error}>
      {error}
    </Bar>
  );
};

export default ErrorBar;

