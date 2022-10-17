import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './Components/Auth/Auth';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        {/* <Route path="*">
        </Route> */}
        <Route path="/" component={Auth}></Route>
      </Switch>
    </div>
  );
}

export default App;
