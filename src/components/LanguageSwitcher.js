// src/components/LanguageSwitcher.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../redux/languageReducer';

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const handleLanguageChange = (event) => {
    dispatch(setLanguage(event.target.value));
  };

  return (
    <div className='p-3 bg-yellow-200'>
      <select value={language} onChange={handleLanguageChange} className='px-4 py-2 border-green-800 border-2 bg-yellow-300 rounded-lg'>
        <option value="en">English</option>
        <option value="hi">Hindi/ हिन्दी</option>
        <option value="mr">Marathi/ मराठी</option>
        {/* Add more languages as needed */}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
