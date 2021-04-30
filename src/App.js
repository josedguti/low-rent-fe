import './App.css';
import { auth } from './services/firebase';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchClothes, fetchWishlists, createWishlist } from './services/api-service';

// Imported Pages 
import HomePage from './Pages/HomePage/HomePage';
import MensPage from './Pages/MensPage/MensPage';
import WomensPage from './Pages/WomensPage/WomensPage';
import Checkout from './Pages/Checkout/Checkout';

// Imported Components
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

// Light and Dark mode theme components
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles } from './themes.js';

const StyledApp = styled.div`

  color: ${(props) => props.theme.fontColor};

`;

function App() {
  // create user state and set user on firebase login
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

  // create wishlist state and pull all from database
  const [wishlistState, setWishlistState] = useState({
    lists: [],
    userList: null
  });

  useEffect(() => {
    async function getWishlists() {
      const lists = await fetchWishlists();
      setWishlistState(prevState => ({
        ...prevState,
        lists
      }));
    }
    
    getWishlists();
  }, [user]);

  // create clothes state and pull all from database
  const [clothesState, setClothesState] = useState({
    clothes: []
  });

  useEffect(() => {
    async function getClothes() {
      const clothes = await fetchClothes();
      setClothesState({ clothes });
    }

    getClothes();
  }, []);

  async function findOrCreateList() {
    if (user) {
      // check all wishlists in db to see if one exists for current user
      let userList = wishlistState.lists.find(list => list.userId === user.uid);

      // if no list was found for the user, create a new one
      if (userList === undefined) {
        const updatedLists = await createWishlist({userId: user.uid});
        userList = updatedLists.find(list => list.userId === user.uid);
        setWishlistState(prevState => ({
          ...prevState,
          lists: [updatedLists]
        }));
      }

      setWishlistState(prevState => ({
        ...prevState,
        userList
      }));
    }
  }

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
          <MensPage
            {...props}
            clothes={clothesState.clothes}
            user={user}
            wishlistState={wishlistState}
            setWishlistState={setWishlistState}
            findOrCreateList={findOrCreateList}
          />
      } />
        <Route exact path = "/womens" render={(props) =>
          <WomensPage
            {...props}
            clothes={clothesState.clothes}
            user={user}
            wishlistState={wishlistState}
            setWishlistState={setWishlistState}
            findOrCreateList={findOrCreateList}
          />
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
