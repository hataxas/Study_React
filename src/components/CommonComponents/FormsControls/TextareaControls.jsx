import React from 'react';
import style from './TextareaControls.module.css';

const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.error;
  return (
    <div className={style.textareaControl}>
      <textarea {...input} {...props} className={style.textarea + (hasError ? (" " + style.error) : "")}/>
      {hasError && <span className={style.errorMessage}>{meta.error}</span> }
    </div>
  )
}
export default Textarea;
