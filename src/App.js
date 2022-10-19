import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './Components/Auth/Auth';
import Home from './Components/Home/Home';
import Meditation from './Components/Mind/Meditation/Meditation';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/home/:component" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/meditation" component={Meditation} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
