import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/about";
import Case from "./components/case/case";
import Asset from "./components/asset/asset";
import Client from "./components/clien/client";
import Footer from "./components/footer/footer";

import './App.css'

function App() {
  return (
      <>
        <Header/>
        <About/>
        <Case/>
        <Asset/>
        <Client/>
        <Footer/>
      </>
  );
}

export default App;
