import React from 'react';
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
    </div>
  );
}

export default App;
