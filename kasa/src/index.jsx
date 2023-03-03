import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'
import StyledGlobalStyle from './utils/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StyledGlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>
  // document.getElementById('root')
)
