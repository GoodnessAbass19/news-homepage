import React from "react";
import Nav from './components/nav'
import About from './components/about'
import Section from './components/section'
import './App.css';

function App() {
  return (
    <div className="container w-full overflow-hidden mx-auto">
      <Nav />

      <Section />
      <About />
    </div>
  );
}

export default App;
