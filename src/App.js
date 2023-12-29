import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/home'>

          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
