import { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './Components/Auth/Auth';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import JournalList from './Components/Mind/Journal/JournalList';
import Productivity from './Components/Productivity/Productivity';
import { UserContext } from './context/UserContext';

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <Header />
      {user &&
      <Productivity />}
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/home" component={Home} />
        <Route path="/pastjournals" component={JournalList} />
        <Route exact path="/" ><Redirect to="/auth/sign-in"/></Route>

      </Switch>
    </div>
  );
}

export default App;
