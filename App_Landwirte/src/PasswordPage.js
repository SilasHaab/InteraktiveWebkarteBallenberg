// PasswordPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PasswordPage.css';

function PasswordPage() {
  return (
    <div className="passwordpage">
    <Link to="/GroupList">
        <button>Enter Application</button>
    </Link>
    </div>
  );
}

export default PasswordPage;