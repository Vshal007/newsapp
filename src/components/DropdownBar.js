

import React, { useState } from 'react';
import Dropdown from './Dropdown';

const DropdownBar = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  const fruits = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
    { label: 'Grapes', value: 'grapes' }
  ];

  const handleFruitSelect = (fruit) => {
    setSelectedFruit(fruit);
  };

  return (
    <div>
      <h1>Choose a Fruit</h1>
      <Dropdown options={fruits} onSelect={handleFruitSelect} />
      <p>Selected Fruit: {selectedFruit ? selectedFruit.label : 'None'}</p>
    </div>
  );
};

export default DropdownBar;
