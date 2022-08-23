import './App.css';
import { Header, Experience, Works, Contact } from './sections/sections'
import NavBar from './Navbar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Experience/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
