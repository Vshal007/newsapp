import React, { useState, useRef } from 'react';

function DropdownHover() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  // Function to open the dropdown
  const openDropdown = () => {
    clearTimeout(closeTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  // Function to close the dropdown after a delay
  const closeDropdown = () => {
    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Delay in milliseconds
  };

  // Function to clear the timeout when component unmounts
  const clearCloseTimeout = () => {
    clearTimeout(closeTimeoutRef.current);
  };

  return (
    <div className="relative">
      {/* Dropdown button */}
      <button
        id="dropdownHoverButton"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Dropdown hover
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        id="dropdownHover"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
        onMouseEnterCapture={clearCloseTimeout}
        //onMouseLeaveCapture={closeDropdown} // Add this line
        className={`z-10 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${isDropdownOpen ? '' : 'hidden'}`}
        aria-labelledby="dropdownHoverButton"
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li >
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Earnings
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownHover;
