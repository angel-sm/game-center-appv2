/* eslint-disable react/button-has-type */
import React from 'react';

import('./DescriptionButton.scss');

const descriptionHandler = (_event) => {
  console.log(_event.target.id);
};

const DescriptionButton = ({ id }) => {
  return (
    <button
      className='Description-button'
      id={id}
      onClick={descriptionHandler}
    >
      Ver mas
    </button>
  );
};

export default DescriptionButton;
