import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home></Home>
        <Switch>
          <Route exact path='/home'>

          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
