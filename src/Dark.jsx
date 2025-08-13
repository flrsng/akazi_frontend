// src/Example.jsx
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from './store/uiSlice';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useEffect } from 'react';
import "./css/dark.css"

export default function DarkMode() {
  const dispatch = useDispatch();

  // Redux state
  const darkMode = useSelector((state) => state.ui.darkMode);

  // Apply dark mode class to root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="">
        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="dark_btn"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
          {darkMode ? ' Light' : ' Dark'}
        </button>
    </div>
  );
}
