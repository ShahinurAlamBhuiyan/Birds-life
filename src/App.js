import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import contact from './pages/contact';
import menu from './pages/menu';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(()=>{
    const hideMenu = () =>{
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", hideMenu)
    return () =>{
      window.removeEventListener("resize", hideMenu)
    }
  })
  
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu"  component={menu} />
        <Route path="/about"  component={About} />
        <Route path="/contact"  component={contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
