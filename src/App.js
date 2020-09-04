import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import AuthContainer from './containers/AuthContainer';
import './sass/App.scss'
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" component={AuthContainer} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
