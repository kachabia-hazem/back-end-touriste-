import React, { useState } from "react";
import "./Lieu.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
const Lieu = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [inputValue, setInputValue] = useState("");

  
  const locations = [
    { name: "Sousse", icon: "fa-map-marker-alt" },
    { name: "Hammamet", icon: "fa-map-marker-alt" },
    { name: "Tunis", icon: "fa-map-marker-alt" },
    { name: "Tozeur", icon: "fa-map-marker-alt" },
    { name: "Tabarka", icon: "fa-map-marker-alt" },
    { name: "Monastir", icon: "fa-map-marker-alt" },
    { name: "Kairouan", icon: "fa-map-marker-alt" },
    { name: "Mahdia", icon: "fa-map-marker-alt" },
    { name: "Bizerte", icon: "fa-map-marker-alt" },
    { name: "Djerba", icon: "fa-map-marker-alt" },
  ];

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowOptions(true); 
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation(location.name);
    setInputValue(location.name); 
    setShowOptions(false); 
  };

  return (
    <div className="select-menu">
      <input
        type="text"
        id="locationInput"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Où allez-vous ?"
        onClick={() => setShowOptions(true)} 
      />
      {showOptions && (
        <div className="options-list active">
          {locations
            .filter((location) =>
              location.name.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((location, index) => (
              <div
                key={index}
                className={`option ${
                  selectedLocation === location.name ? "selected" : ""
                }`}
                onClick={() => handleSelectLocation(location)}
              >
                <i className={`fas ${location.icon} location-icon`}></i> {/* Icône à gauche */}
                {location.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Lieu;