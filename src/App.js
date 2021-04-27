import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Card from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Home Page
       <Header />
       <Card />
      </header>
    </div>
  );
}

export default App;
