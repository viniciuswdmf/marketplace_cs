import React from 'react';
import Grid from '../layout/grid';

const FileInput = ({ input: { value, onChange, ...inputProps }, meta: { touched, error }, label, ...props }) => {
  const handleChange = (event) => {
    const file = event.target.files[0];
    onChange(file);
  };

  return (
    <Grid cols={props.cols}>
      <div className='form-group'>
        <label htmlFor={props.name}>{label}</label>
        <input
          type="file"
          className='form-control'
          onChange={handleChange}
          {...inputProps}
          {...props}
        />
        {touched && error && <span className="error">{error}</span>}
      </div>
    </Grid>
  );
};

export default FileInput;
