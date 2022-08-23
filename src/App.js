import './App.css';
import { Header, Experience, Works, Contact } from './sections/sections'
import NavBar from './Navbar'
import { useEffect } from 'react';


function App() {



  useEffect(() => {
  })

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

export default App