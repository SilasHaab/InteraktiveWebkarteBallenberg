import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ leftHeaderText, rightHeaderText, leftLink, rightLink }) {
  return (
    <header className="header">
      <h1 className="header-left">
        {leftLink ? (
          <Link to={leftLink} style={{ color: 'inherit', textDecoration: 'none' }}>
            {leftHeaderText}
          </Link>
        ) : (
          leftHeaderText
        )}
      </h1>
      <h1 className="header-right">
        {rightLink ? (
          <Link to={rightLink} style={{ color: 'inherit', textDecoration: 'none' }}>
            {rightHeaderText}
          </Link>
        ) : (
          rightHeaderText
        )}
      </h1>
    </header>
  );
}

export default Header;