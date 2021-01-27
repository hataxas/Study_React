import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import WithUrlDataUserProfileContainer from './components/Users/UserProfile/UserProfileContainer';
//import HeaderContainer from './components/Header/HeaderContainer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        {/* //! эти две части не меняются (они на любой странице выглядят одинаково) */}
        {/* <HeaderContainer /> */}
        <Header />
        <Navbar />
        {/* //! эта часть может содержать любую из наших страниц Profile, Massages, News, Music или Settings */}
        <div className="app-wrapper-content">

          {/* //!когда route увидит заданный адресс, он отрисует анонимную функцию, которая вызывает необходимую компоненту */}
          <Route path='/profile' render={() => <Profile />} />
          <Route path='/messages' render={() => <Messages />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/user_profile/:userId' render={() => <WithUrlDataUserProfileContainer />} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
