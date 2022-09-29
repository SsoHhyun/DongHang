import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Router from "./router/router.jsx";
import { configureStore } from "@reduxjs/toolkit";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Navbar />
          <Router />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;