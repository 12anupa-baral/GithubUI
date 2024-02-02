import { useState } from "react";
import Profile from "./components/profile";
import Repo from "./components/repository";
import Readme from "./components/readme";
import Nav from "./components/nav";
import "./App.css";

function App() {
  return (
    <>
      <div className="top">
        <Nav />
      </div>

      <h4>Repositories</h4>

      <div className="user">
        <Profile />
        <div className="repo">
          <Readme />
          <Repo />
        </div>
      </div>
    </>
  );
}

export default App;
