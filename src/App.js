import './App.css';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";
import Booking from './Components/Booking/Booking';
import BookHotel from './Components/BookHotel/BookHotel';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';

export const UserContext = createContext()

function App() {
  const [loggedInUser , setLoggedInUser]= useState({
    name :'',
    emails:'',
    photo :'',
    password :'',
    message :'',
  }) 
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path={`/booking/:name`}>
            <Booking/>
          </Route>
          <Route path={`/book/hotel/for/:name`}>
            <BookHotel/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route to="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
  </UserContext.Provider>
  );
}

export default App;
