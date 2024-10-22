import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import Header from './Header';
import './GroupList.css';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function GroupList() {
  const [isEditing, setIsEditing] = useState(false);
  const leftHeaderText = isEditing ? "Gruppe hinzufügen" : "";
  const rightHeaderText = isEditing ? "Fertig" : "Bearbeiten";
  const leftLink = "/NewGroup";
  const editLink = "/EditGroup"; //dieser Link ist jetzt für alle gleich, er muss abhängig vom tabellen eintrag sein!!

  // Temporary dictionary for test data:
  const items = Array.from({ length: 20 }, (_, index) => ({
    group: `Gruppe ${index + 1}`,
    pasture: `Weide ${index + 1}`
  }));

  // Handles the editing state
  const toggleEditing = () => {
    setIsEditing(prev => !prev);
  };

  return (
    <div className="group-list">
      <Header 
        leftHeaderText={
          <Link to={leftLink} style={{ color: 'inherit', textDecoration: 'none' }}>
            {leftHeaderText}
          </Link>
        } 
        rightHeaderText={<span onClick={toggleEditing} style={{ cursor: 'pointer' }}>{rightHeaderText}</span>} 
      />
      <div className="list-container">
        {items.map((item, index) => (
          <div key={index} style={{ display: 'flex' }}>
            {isEditing && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <DeleteOutlinedIcon style={{ fontSize: '30px', color: 'red', cursor: 'pointer' }} />
              </div>
            )}
            <div className={`list-item ${isEditing ? 'editing' : ''}`}>
              <div className="item-left">{item.group}</div>
              <div className="item-right">
                {!isEditing ? (
                  <div className="grey-box short">{item.pasture}</div>
                ) : (
                  <Link to={editLink} style={{ color: 'inherit', textDecoration: 'none' }}>
                    <div className="grey-box edit">Bearbeiten</div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupList;