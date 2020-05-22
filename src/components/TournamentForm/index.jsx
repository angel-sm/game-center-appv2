import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix='$'
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const TournamentForm = () => {
  return (
    <form onSubmit={null}>
      <TextField
        id='date'
        label='Birthday'
        type='date'
        defaultValue='2017-05-24'
        variant='outlined'
        className={useStyles().textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id='date'
        label='Birthday'
        type='date'
        defaultValue='2017-05-24'
        variant='outlined'
        className={useStyles().textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField id='outlined-basic' label='Outlined' variant='outlined' />

      <TextField id='outlined-basic' label='Outlined' variant='outlined' />

      <TextField id='outlined-basic' label='Outlined' variant='outlined' />

      <TextField id='outlined-basic' label='Outlined' variant='outlined' />
      <TextField
        id='outlined-textarea'
        label='Multiline Placeholder'
        placeholder='Placeholder'
        multiline
        variant='outlined'
      />
    </form>
  );
};

export default TournamentForm;
