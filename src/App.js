import './App.css';

// Imported Pages 
import HomePage from './Pages/HomePage/HomePage'

// Imported Components

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path = "/" render={(props) => 
      <HomePage />
      
    } />
    </Switch>
    </div>
  );
}

export default App;
