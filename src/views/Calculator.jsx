import React from 'react';
import { TextField } from '@material-ui/core';

export function Calculator() {
  return (
    <form noValidate autoComplete="off">
      <TextField  label="Salary" variant="outlined" helperText="Expected equilent of salary per month"/>
      <TextField label="Time" variant="outlined" helperText="Time which you spent to make item"/>
    </form>
  );
}
