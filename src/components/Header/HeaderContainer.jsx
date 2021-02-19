import Header from './Header';
import React from 'react';
//import * as axios from 'axios';
import { connect } from 'react-redux';
import {login} from '../../redux/auth_reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.login();
    console.log("props:", this.props);
    // getAuthUser.then(data => {
    //     if (data.status === "success") {
    //       this.props.setAuthUserData(data.data);
    //     }

        //console.log(data.result);
      //});
  }

  render() {
    return (
      //! таким образом при помощи спрет оператора мы передаем в компоненту Profile все props которые пришли в нашу контейнерную компоненту
        <Header {...this.props} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    name: state.auth.name,
  };
};


export default connect(mapStateToProps, {login}) (HeaderContainer);
