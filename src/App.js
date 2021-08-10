import React from 'react'
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Stylegraphy from './style/Stylegraphy';
import GlobalStyles from './style/Global.styles'
import NavMenu from './components/NavMenu'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './components/Footer'


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
