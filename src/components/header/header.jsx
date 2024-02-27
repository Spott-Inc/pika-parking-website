import React, { useEffect } from 'react';
import logo from './logo.svg';

export function Header() {

  useEffect(() => {
    function classToggle() {
      const navs = document.querySelectorAll('.nav-items')
      navs.forEach(nav => nav.classList.toggle('nav-toggleshow'));
    }

    const toggleElement = document.querySelector('.nav-link-toggle');
    toggleElement.addEventListener('click', classToggle);

    return () => {
      toggleElement.removeEventListener('click', classToggle);
    };
  }, []);

  return (
    <div className='container'>
      <div className="navbar">
          <div className="nav-link-brand">
            <img src={logo} alt='Pika logo'></img>
          </div>
          <div className="nav-link nav-link-toggle">
              <span className="material-symbols-rounded">
                  menu
              </span>
          </div>
          <nav className="nav-items nav-items-right">
              <div className="nav-link">
                <a href='#'>Home</a>
              </div>
              <div className="nav-link">
                <a href='#'>About</a>
              </div>
              <div className="nav-link">
                <a href='#'>Solutions</a>
              </div>
              <div className="nav-link">
                <a href='#'>Contact</a>
              </div>
          </nav>
      </div>
    </div>
  );
}
