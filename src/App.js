import './App.css';

// Imported Pages 
import HomePage from './Pages/HomePage/HomePage'
import MensPage from './Pages/MensPage/MensPage'

// Imported Components

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path = "/" render={(props) => 
      <HomePage />
      } />
      <Route exact path = "/mens" render={(props) =>
      <MensPage/>
      } />
    </Switch>
    </div>
  );
}

export default App;
