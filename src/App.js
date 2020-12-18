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
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        {/* //! эти две части не меняются (они на любой странице выглядят одинаково) */}
        <Header />
        <Navbar />
        {/* //! эта часть может содержать любую из наших страниц Profile, Massages, News, Music или Settings */}
        <div className="app-wrapper-content">

          {/* //!когда route увидит заданный адресс, он отрисует анонимную функцию, которая вызывает необходимую компоненту */}
          <Route path='/profile' render={() => <Profile store={props.store} />} />
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
