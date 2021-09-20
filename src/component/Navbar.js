import React, { useState } from "react";

const Navbar = () => {
  const [navLinks, setNavLinks] = useState('')
  const [menuLine, setMenuLine] = useState('line')

  window.addEventListener("resize", resized);

  function resized() {
    if (window.innerWidth > 700) {
      if(navLinks==='slide'){
          setNavLinks('')
      }
    }
  }

  const handleClick = () => {
    if(navLinks===''){
        setNavLinks('slide')
    } else {
        setNavLinks('')
    }
    if(menuLine==='line'){
        setMenuLine('toggle-line')
    } else {
        setMenuLine('line')
    }
  };

  return (
    <nav>
      
        <a href="#"><div className="logo"></div></a>

      <ul className={navLinks +' nav-links'}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Blogs</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>
      <div className="menu" onClick={handleClick}>
        <div className={menuLine + '1'} ></div>
        <div className={menuLine + '2'}></div>
        <div className={menuLine + '3'}></div>
      </div>
    </nav>
  );
};

export default Navbar;
