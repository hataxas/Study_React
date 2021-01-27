import style from './Login.module.css';
import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {/* Заменяем наши input на Field */}
        <Field name={"login"} type={"text"} placeholder={"Login"} component={"input"} className={style.field}/>
      </div>
      <div>
        <Field name={"password"} type={"password"} placeholder={"Password"} component={"input"} className={style.field}/>
      </div>
      <div>
        <Field name={"rememberMe"} type={"checkbox"} component={"input"} className={style.checkbox}/>
        <label htmlFor="rememberMe" className={style.lable}>remember me</label>
      </div>
      <div>
        <button type="submit" className={style.button}>Login</button>
      </div>
    </form>
  )
}

//! оборачиваем нашу форму LoginForm в reduxForm, которая будет взаимодействовать со state
const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <div className={style.login}>
      <h1 className={style.title}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login;
