import React from 'react';
import style from './InputControls.module.css';

const Input = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={style.inputControl}>
      <input {...input} {...props} className={style.input + (hasError ? (" " + style.error) : "")}/>
      {hasError && <span className={style.errorMessage}>{meta.error}</span> }
    </div>
  )
}
export default Input;
