import './App.css';

// Imported Pages 
import HomePage from './Pages/HomePage/HomePage';
import MensPage from './Pages/MensPage/MensPage';
import WomensPage from './Pages/WomensPage/WomensPage';
import Checkout from './Pages/Checkout/Checkout';

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
      <Route exact path = "/womens" render={(props) =>
      <WomensPage/>
      } />
      <Route exact path = "/checkout" render={(props) => 
      <Checkout />
      } />
    </Switch>
    </div>
  );
}

export default App;
