import React from "react";
import "./App.css";
import { Routes , Route, BrowserRouter, Link} from "react-router-dom";
import Beers from "./Beers";
import Login from "./Form";
import { useSelector } from "react-redux";

function NavBar(){
  return(
    <div className="navbar">
      <Link to={"/"}>Login</Link>
      <Link to={"/Beers"}>Beers</Link>
    </div>
  )
}

<BrowserRouter>
<Routes>
  <Route path="/" index element={<Beers />} />
  <Route path="/login" element={<Login />} />
</Routes>
</BrowserRouter>

function App () {
  const isAuth = useSelector((state) => state.user.auth);

  return(
    <>
    { isAuth ? <Beers /> : <Login />}
    </>
  )
}

export default App;