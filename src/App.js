import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

function App(props) {
  // let postsData = [
  //   { id: 1, text: 'Hi, how are you???', likesCount: 70 },
  //   { id: 2, text: "It's my first post.", likesCount: 50 },
  //   { id: 3, text: "It's my second post.", likesCount: 100 }
  // ]
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        {/* //! эти две части не меняются (они на любой странице выглядят одинаково) */}
        <Header />
        <Navbar />
        {/* //! эта часть может содержать любую из наших страниц Profile, Massages, News, Music или Settings */}
        <div className="app-wrapper-content">
          {/* <Route path='/profile' component={Profile} />
          <Route path='/messages' component={Messages} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} /> */}
          {/* //! это альтернативная запись (так мы можем задавать атрибуты нашим компонентам чтобы в props записалось то что нам надо) */}
          {/* когда route увидит заданный адресс, он отрисует анонимную функцию, которая вызывает необходимую компоненту */}
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
          <Route path='/messages' render={() => <Messages state={props.state.messagesPage} dispatch={props.dispatch} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
