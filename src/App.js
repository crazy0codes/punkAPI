import React from "react";
import "./App.css";
import Beers from "./Beers";
import Login from "./Form";
import { useSelector } from "react-redux";

function App () {
  const isAuth = useSelector((state) => state.user.auth);

  return(
    <>
    { isAuth ? <Beers /> : <Login />}
    </>
  )
}

export default App;