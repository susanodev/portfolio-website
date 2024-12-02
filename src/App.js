import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Resume /> 
    </div>
    );
};

export default App;
