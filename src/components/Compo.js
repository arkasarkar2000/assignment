import React, { useState } from 'react';

const Compo = ({ value, readonly }) => {
  const [selectedValues, setSelectedValues] = useState(value);

  const handleCheckboxChange = (event) => {
    const { value: checkboxValue, checked } = event.target;

    if (checked) {
      setSelectedValues([...selectedValues, checkboxValue]);
    } else {
      setSelectedValues(selectedValues.filter((value) => value !== checkboxValue));
    }
  };

  return (
    <div>
      <label>MultiSelect Dropdown:</label>
      <div>
        <input
          type="checkbox"
          id="option1"
          value="option1"
          disabled={readonly || selectedValues.includes('option1')}
          checked={selectedValues.includes('option1')}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="option1">Option 1</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="option2"
          value="option2"
          disabled={readonly || selectedValues.includes('option2')}
          checked={selectedValues.includes('option2')}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="option2">Option 2</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="option3"
          value="option3"
          disabled={readonly || selectedValues.includes('option3')}
          checked={selectedValues.includes('option3')}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="option3">Option 3</label>
      </div>
      {!readonly && (
        <div>
          Selected values:
          <ul>
            {selectedValues.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Compo;
