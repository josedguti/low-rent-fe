import './App.css';
import { Link } from 'react-router-dom';

// Imported Pages 
import HomePage from './Pages/HomePage/HomePage';
import MensPage from './Pages/MensPage/MensPage';
import WomensPage from './Pages/WomensPage/WomensPage';
import Checkout from './Pages/Checkout/Checkout';

// Imported Components
import { auth } from './services/firebase';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

// Light and Dark mode theme components
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles } from './themes.js';

const StyledApp = styled.div`

  color: ${(props) => props.theme.fontColor};

`;

function App() {
  const [user, setUser] = useState(null);
  // Darkmode and lightmode variables 
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
    
      useEffect(() => {
        const cancelSubscription = auth.onAuthStateChanged(userInfo => {
          setUser(userInfo);
        });

        return function() { // cleanup function
          cancelSubscription();
        }
      }, [user]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
      <GlobalStyles />
    <StyledApp className="App">
      <label className='switch'>
        <input type="checkbox"/>
      <span className='slider round' onClick={() => themeToggler()}></span>
      </label>
      <Nav
        user={user}
        setUser={setUser}
      />
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
    <Footer />
    </StyledApp>
    </ThemeProvider>

  );
}

export default App;
