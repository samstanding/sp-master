import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/login">
            Upload Your Project!
          </Link>
        </li>
        <li>
          <Link to="/home">
            Back to Landing Page
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
