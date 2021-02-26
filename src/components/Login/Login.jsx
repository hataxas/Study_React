import style from './Login.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../CommonComponents/FormsControls/InputControls';
import { required, maxLength30 } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import {login } from '../../redux/auth_reducer';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {/* Заменяем наши input на Field */}
        <Field name={"email"} type={"text"} placeholder={"Email"} component={Input} className={style.field} validate={[required, maxLength30]} />
      </div>
      <div>
        <Field name={"password"} type={"password"} placeholder={"Password"} component={Input} className={style.field} validate={[required, maxLength30]} />
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
    //! мы собрали данные из формы и теперь должны отправить их на сервер
    props.login(formData.email, formData.password);
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (
    <div className={style.login}>
      <h1 className={style.title}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect (mapStateToProps, {login}) (Login);
