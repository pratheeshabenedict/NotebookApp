import React, { useContext } from 'react';
import { Themecontext } from '../context/Themecontext';
import { SWITCH_TO,MODE } from '../constants/constant';
const Themetoggle = () => {
  const { theme, toggleTheme } = useContext(Themecontext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
    >
      {SWITCH_TO} {theme === 'light' ? 'Dark' : 'Light'} {MODE}
    </button>
  );
};

export default Themetoggle;
