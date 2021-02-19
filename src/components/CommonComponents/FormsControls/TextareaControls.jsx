import React from 'react';
import style from './TextareaControls.module.css';

//!  мы деструктуризируем props которые приходят в компоненту Textarea (берем из них содержимое input и meta и сохраняем их как бы в отдельные переменные а все остальные пропсы остаются в переменной props)
const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.error; //! т.к. сообщения об ошибках находятся в meta
  return (
    <div className={style.textareaControl}>
      {/* //! мы должны передать то что находится в input (текст сообщение) и все пропсы которые пришли в нашу const Textarea (это наш плэйсхолдер) компоненте textarea */}
      <textarea {...input} {...props} className={style.textarea + (hasError ? (" " + style.error) : "")}/>
      {hasError && <span className={style.errorMessage}>{meta.error}</span> }
    </div>
  )
}

export default Textarea;
