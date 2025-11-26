// src/FindJobs/Sort.tsx

import React from 'react';
import { Combobox } from '@mantine/core'; // Assuming Combobox is from Mantine
// ... import IconAdjustments and other necessary components/hooks

const Sort = () => {
  // Assuming these states and functions are managed within the component:
  const [selectedItem, setSelectedItem] = React.useState('Best Match');
  const combobox = {
      toggleDropdown: () => console.log('Toggling dropdown'), // Placeholder
      closeDropdown: () => console.log('Closing dropdown'),    // Placeholder
  }; 
  const options = ['Best Match', 'Newest First', 'Salary: High to Low', 'Salary: Low to High']; // Example options
  
  // Function to handle option selection
  const onOptionSubmit = (val: string) => {
    setSelectedItem(val);
    combobox.closeDropdown();
  };

  // --- NEW COLOR PALETTE ---
  const accentColorClass = 'text-teal-600'; // Vibrant Teal for icon and text
  const borderColorClass = 'border-gray-300 hover:border-teal-500'; // Light gray border, teal on hover
  const hoverBgClass = 'hover:bg-teal-50'; // Subtle background on hover

  return (
    <Combobox
      // Assuming 'Combobox' props like store and other config are here
      position="bottom-start"
      onOptionSubmit={onOptionSubmit}
    >
      <Combobox.Target>
        {/* ENHANCED STYLING for the trigger button */}
        <div 
          onClick={() => combobox.toggleDropdown()} 
          className={`
            cursor-pointer 
            border 
            ${borderColorClass} 
            flex 
            px-3 py-1 
            rounded-full 
            items-center 
            text-sm 
            font-medium 
            text-gray-700 
            ${hoverBgClass} 
            transition-all duration-150
          `}
        >
          {/* IconAdjustments: Enhanced size and color */}
          <IconAdjustments className={`h-4 w-4 mr-2 ${accentColorClass}`} />
          
          {/* Selected Item */}
          {selectedItem}
        </div>
      </Combobox.Target>

      <Combobox.Dropdown>
        {/* Combobox.Options should loop through your 'options' data */}
        <Combobox.Options>
          {options.map((option) => (
            <Combobox.Option 
              value={option} 
              key={option}
              active={selectedItem === option}
              // Optional: custom styles for a better look on the options
              className="text-gray-700 hover:bg-teal-50"
            >
              {option}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default Sort;