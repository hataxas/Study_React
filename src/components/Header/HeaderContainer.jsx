import Header from './Header';
import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setAuthUserData} from '../../../redux/auth_reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    console.log(this.props);
    axios.get(`http://localhost:4567/api/users/auth/me`, {withCredentials: true})
      .then(response => {
        if (response.data.status === "success") {
          this.props.setAuthUserData(response.data.data);
        }

        //console.log(response.data.result);
      });
  }

  render() {
    return (
      //! таким образом при помощи спрет оператора мы передаем в компоненту Profile все props которые пришли в нашу контейнерную компоненту
        <Header {...this.props}  />
    );
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  name: state.auth.data.name

});


export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);
