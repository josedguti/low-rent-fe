import './App.css';
import { auth } from './services/firebase';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchClothes, fetchWishlists, fetchClosets, createWishlist, createCloset, deleteCloset, updateCloset } from './services/api-service';

// Imported Pages 
import HomePage from './Pages/HomePage/HomePage';
import MensPage from './Pages/MensPage/MensPage';
import WomensPage from './Pages/WomensPage/WomensPage';
import Checkout from './Pages/Checkout/Checkout';
import Credit from './Pages/Credit/Credit';

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
  // Darkmode and lightmode variables 
  const [theme, setTheme] = useState('light');
  
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  // create user state and set user on firebase login
  const [user, setUser] = useState(null);
    
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
    userListId: null
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

  const [closetState, setClosetState] = useState({
    closets: [],
  });

  useEffect(() => {
    async function getClosets() {
      const closets = await fetchClosets();
      let userClosets = closets.filter(closet => closet.wishlist_id === wishlistState.userListId);
      setClosetState({ closets: userClosets });
    }
    
    getClosets();
  }, [wishlistState.userListId]);

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
        try {
          // create new wishlist and get all wishlists back from db
          const updatedLists = await createWishlist({userId: user.uid});
          // find the new wishlist that was just created for the user
          userList = updatedLists.find(list => list.userId === user.uid);
          // set state to include all wishlists - including new one just created
          setWishlistState(prevState => ({
            ...prevState,
            lists: updatedLists
          }));
        } catch (error) {
          console.log(error);
        }
      }      
      // set state to hold the list for the logged in user
      setWishlistState(prevState => ({
        ...prevState,
        userListId: userList.id
      }));
    }
  }

  useEffect(() => {
    findOrCreateList();
  }, [user]);
  
  async function addClothingToList(input) {
    try {
      // create closet with input object containing clothing id, wishlist id, quantity of 1, and size
      const closets = await createCloset(input);
      let userClosets = closets.filter(closet => closet.wishlist_id === wishlistState.userListId);
      setClosetState({ closets: userClosets });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteClothingFromList(closetId) {
    try {
      const closets = await deleteCloset(closetId);
      let userClosets = closets.filter(closet => closet.wishlist_id === wishlistState.userListId);
      setClosetState({ closets: userClosets });
    } catch (error) {
      console.log(error);
    }
  }

  async function updateClothingInList(inputs) {
    try {
      const closets = await updateCloset(inputs);
      let userClosets = closets.filter(closet => closet.wishlist_id === wishlistState.userListId);
      setClosetState({ closets: userClosets });
    } catch (error) {
      console.log(error);
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
            addClothingToList={addClothingToList}
          />
      } />
        <Route exact path = "/womens" render={(props) =>
          <WomensPage
            {...props}
            clothes={clothesState.clothes}
            user={user}
            wishlistState={wishlistState}
            setWishlistState={setWishlistState}
            addClothingToList={addClothingToList}
            />
          } />
        <Route exact path = "/checkout" render={(props) => 
          <Checkout
          {...props}
            clothes={clothesState.clothes}
            closetState={closetState}
            deleteClothingFromList={deleteClothingFromList}
            updateClothingInList={updateClothingInList}
          />
      } />
      <Route exact path = "/credit" render={(props) => 
        <Credit />
      }/>
    </Switch>
    <Footer />
    </StyledApp>
    </ThemeProvider>
  );
}

export default App;
