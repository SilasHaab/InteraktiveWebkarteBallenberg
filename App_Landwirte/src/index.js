import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import GroupList from './GroupList';
import PasswordPage from './PasswordPage.js';
import NewGroup from './NewGroup.js';
import EditGroup from './EditGroup.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<PasswordPage/>} />
        <Route path="/GroupList" element={<GroupList />} />
        <Route path="/NewGroup" element={<NewGroup />} />
        <Route path="/EditGroup" element={<EditGroup />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
