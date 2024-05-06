import React from 'react';
import { useState } from 'react';


function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
 
  return (
    <header className='header'>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
        </ul>
      </nav>
      <div className="profile" onClick={toggleDropdown}>
        <div className="avatar">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile" />
        </div>
        {isDropdownOpen && (
          <ul className="dropdown">
            <li className="dropdown-item">Settings</li>
            <li className="dropdown-item">Logout</li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
