import './App.css';
import Header from './components/Header/Header'

import Card from './components/Card/Card'

import Nav from './components/Nav/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
       Home Page
       <Header />
       <Card />
      </header>
    </div>
  );
}

export default App;
