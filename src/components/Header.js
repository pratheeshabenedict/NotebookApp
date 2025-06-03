import React, { useContext } from 'react';
import { Themecontext } from '../context/Themecontext';

const Header = () => {
  const { darkMode, toggleTheme } = useContext(Themecontext);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow">
      <h1 className="text-xl font-bold">📝 Notes App</h1>
      <button
        onClick={toggleTheme}
        className="bg-gray-300 dark:bg-gray-700 text-sm px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition"
      >
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
