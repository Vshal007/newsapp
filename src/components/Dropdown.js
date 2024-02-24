// Dropdown.js

import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="selected-option">
        {selectedOption ? selectedOption.label : 'Select an option'}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map(option => (
            <li key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
