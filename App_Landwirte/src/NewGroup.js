import React from 'react';
import Header from './Header';
import './NewGroup.css';

function NewGroup() {
  const leftHeaderText = "Abbrechen";
  const rightHeaderText = "Speichern";
  const leftLink = "/GroupList";
  const rightLink = "";

  return (
    <div className="group-list">
      <Header 
        leftHeaderText={leftHeaderText} 
        rightHeaderText={rightHeaderText} 
        leftLink={leftLink}
        rightLink={rightLink} 
      />
      <div className="list-container">
        Hier wird die Erfassung einer neuen Gruppe ergänzt.
      </div>
    </div>
  );
}

export default NewGroup;
