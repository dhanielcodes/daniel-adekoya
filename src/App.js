import './App.css';
import { Header, Experience, Works } from './sections/sections'
import NavBar from './Navbar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Experience/>
      <Works/>
    </div>
  );
}

export default App;
