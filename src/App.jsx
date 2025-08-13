import { useSelector } from 'react-redux';
import React from 'react';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import "./css/app.css"

function App() {
  const darkMode = useSelector((state) => state.ui.darkMode);

  return (
    <div>
      <div className={darkMode ? 'dark' : ''}>
        <Header />
        <Container />
        <Footer />
      </div>
    </div>
  );
}

export default App;
