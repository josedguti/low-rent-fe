import './App.css';
import { Route, Switch } from 'react-router-dom';

// Imported Pages 
import HomePage from './Pages/HomePage/HomePage';
import MensPage from './Pages/MensPage/MensPage';
import WomensPage from './Pages/WomensPage/WomensPage';
import Checkout from './Pages/Checkout/Checkout';

// Imported Components
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
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
