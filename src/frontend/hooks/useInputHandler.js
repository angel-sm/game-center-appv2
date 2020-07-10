import { useState } from 'react';

const setInputValue = (initialValues) => {
  const [form, setValues] = useState(initialValues);
  const onChange = (event) => setValues({ ...form, [event.target.name]: event.target.value });
  return {
    form,
    onChange,
  };
};

export default setInputValue;
