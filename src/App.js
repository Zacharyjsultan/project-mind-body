import { Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './Components/Auth/Auth';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import JournalList from './Components/Mind/Journal/JournalList';
import Productivity from './Components/Productivity/Productivity';

function App() {
  return (
    <div className="App">
      <Header />
      <Productivity />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/home" component={Home} />
        <Route path="/pastjournals" component={JournalList} />
      </Switch>
    </div>
  );
}

export default App;
