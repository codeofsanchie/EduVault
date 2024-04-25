import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import {
  BsPersonPlus,
  BsBook,
  BsAward,
  BsTrophy,
  BsFile,
  BsFileEarmarkCode
} from "react-icons/bs";

function Header() {
  const location = useLocation();

  // Function to determine if a navigation item is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className='header'>
      <nav className='navbar'>
        <ul className='navbar-list'>
        <li className={`navbar-item ${isActive('/add-PersonalDetails')}`}>
            <Link to="/add-PersonalDetails" className="navbar-link">
            <BsPersonPlus className="icon" /> Personal Details
            </Link>
          </li>
          <li className={`navbar-item ${isActive('/add-EducationalDetails')}`}> 
          <Link to="/add-EducationalDetails" className="navbar-link">
            <BsBook className="icon" /> Educational Details
          </Link>
          </li>
          <li className={`navbar-item ${isActive('/add-CurricularDetails')}`}>
            <Link to="/add-CurricularDetails" className="navbar-link">
              <BsAward className="icon" /> Curricular & Co-curricular Details
            </Link>
          </li>
          <li className={`navbar-item ${isActive('/add-AchievementDetails')}`}>
            <Link to="/add-AchievementDetails" className="navbar-link">
              <BsTrophy className="icon" /> Achievements and Certifications
            </Link>
          </li>
          <li className={`navbar-item ${isActive('/add-ProjectDetails')}`}>
            <Link to="/add-ProjectDetails" className="navbar-link">
              <BsFileEarmarkCode className="icon" /> Project Details
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
