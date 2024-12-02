import React from 'react';
// import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Sayam Biswas</h1>
      <h2>Welcome to my portfolio !!</h2>
      <div className='img'>
        <img  src="" alt='loading'></img>
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href='#resume'>Resume</a>
      </nav>
    </header>
  );
}

export default Header;
