import React from 'react'
import {Switch, Route, BrowserRouter} from "react-router-dom";

import './App.css';
import HomePage from "./components/pages/homepage/homepage.component";
import ShopPage from './components/pages/shop/shop.component'
import Header from './components/header/header.component'

function App() {
  return (
    <div >  
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
     </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
