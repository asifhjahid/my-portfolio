import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';
import GlobalStyles from './style/Global.styles';
import Stylegraphy from './style/Stylegraphy';


export default function App() {
  return (
    <div>
      <GlobalStyles />
      <Stylegraphy />
      <Router>
      
      <NavMenu />
      
     <Switch>
        <Route path='/' exact>
        <Home />
        </Route>
         <Route path='/about'>
          <About />     
        </Route>
        <Route path='/projects'>
          <Project />
        </Route>
        <Route path='/contact'>
          <Contact /> 
        </Route>
      
      </Switch> 
      
       <Footer />

      </Router>

    </div>
    
  )
}
