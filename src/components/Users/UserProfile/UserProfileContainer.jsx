import UserProfile from './UserProfile';
import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile} from '../../../redux/user_profile_reducer';
import { withRouter } from 'react-router-dom';

class UserProfileContainer extends React.Component {
  componentDidMount() {
    console.log(this.props);
    //! Смотрим путь в консоли
    let userId = this.props.match.params.userId;
    console.log(userId);
    axios.get(`http://localhost:4567/api/users/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data.result);
        console.log(response.data.result);
      });
  }

  render() {
    return (
      //! таким образом при помощи спрет оператора мы передаем в компоненту Profile все props которые пришли в нашу контейнерную компоненту
        <UserProfile {...this.props} userProfile={this.props.userProfile} />
    );
  }
}

let mapStateToProps = (state) => ({
  userProfile: state.userProfilePage.userProfile
});

let WithUrlDataUserProfileContainer = withRouter(UserProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataUserProfileContainer);
