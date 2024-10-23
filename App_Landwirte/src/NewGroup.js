import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Header from './Header';
import './NewGroup.css';
import csvFile from './data/Tierrassen.csv';

function NewGroup() {
  const leftHeaderText = "Abbrechen";
  const rightHeaderText = "Speichern";
  const leftLink = "/GroupList";

  const [groupedTierrassen, setGroupedTierrassen] = useState({}); // leeres Dictionary
  const [selectedRassen, setSelectedRassen] = useState({}); // leeres Dictionary

  useEffect(() => {
    // CSV-Datei laden und parsen
    Papa.parse(csvFile, {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data;
        const groupedData = {};

        // CSV-Inhalt in ein Dictionary schreiben
        data.forEach((item) => {
          const { Tierrasse, Gruppe, Link } = item;
          if (!groupedData[Gruppe]) {
            groupedData[Gruppe] = [];
          }
          groupedData[Gruppe].push({ tierrasse: Tierrasse, link: Link });
        });

        setGroupedTierrassen(groupedData);
      }
    });
  }, []);
  
  // Speichern der ausgewählten Tierrassen (momentan nur Ausgabe)
  const handleSave = () => {
    console.log("Save");
    console.log("Grouped Tierrassen:", groupedTierrassen);
  };

  const handleCheckboxChange = (gruppe, tierrasse) => {
    setSelectedRassen(prev => {
      const newSelected = { ...prev };
      if (!newSelected[gruppe]) {
        newSelected[gruppe] = new Set();
      }
      if (newSelected[gruppe].has(tierrasse)) {
        newSelected[gruppe].delete(tierrasse);
      } else {
        newSelected[gruppe].add(tierrasse);
      }
      return newSelected;
    });
  };

  return (
    <div className="group-list">
      <Header 
        leftHeaderText={leftHeaderText} 
        rightHeaderText={rightHeaderText} 
        leftLink={leftLink}
        onRightClick={handleSave}
      />
      <div className="main-container">
        <div className="title-text">Neue Gruppe erfassen</div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div className="subtitle-text">Name:</div>
          <input className="textinput" />
        </div>
        <div className="subtitle-text">Tierrassen zuweisen:</div>
        <div className="tierrassen-container">
          {Object.entries(groupedTierrassen).map(([gruppe, tierrassen]) => (
            <div key={gruppe}>
              <div className="group-title">{gruppe}</div>
              {tierrassen.map(({ tierrasse, link }) => (
                <div key={tierrasse}>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => handleCheckboxChange(gruppe, tierrasse)}
                    />
                    {tierrasse}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewGroup;
