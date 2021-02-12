import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//! передаем isAuth: state.auth.isAuth в нашу компоненту AuthRedirectComponent при помощи HOC connect
let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

//! Создадим HOC, которая позволяет нам автоматически делать контейнерные компоненты для редиректа (Если пользователь не залогинен - делаем редирект на страницу login)
export const withAuthRedirect = (Component) => {
  let AuthRedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect to={'/login'} />;
    return < Component {...props} />
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);

  return ConnectedAuthRedirectComponent;
}
