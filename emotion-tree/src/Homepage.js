import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Fear from './Fear';
import Anger from './Anger';
import Sadness from './Sadness';
import Love from './Love';
import Joy from './Joy';
import Surprise from './Surprise';
import './App.css';



function HomePage() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="home-page">
            <h1>Welcome to Tree of Emotion</h1>
            <p>Let's build your emotion tree. Choose an emotion to start:</p>
            <div className="button-container">
              <button className="button" onClick={() => handleNavigation('fear')}>Fear</button>
              <button className="button" onClick={() => handleNavigation('joy')}>Joy</button>
              <button className="button" onClick={() => handleNavigation('anger')}>Anger</button>
              <button className="button" onClick={() => handleNavigation('sadness')}>Sadness</button>
              <button className="button" onClick={() => handleNavigation('love')}>Love</button>
              <button className="button" onClick={() => handleNavigation('surprise')}>Surprise</button>
            </div>
          </div>
        );
      case 'fear':
        return <Fear />;
      case 'joy':
        return <Joy />;
      case 'anger':
        return <Anger />;
      case 'sadness':
        return <Sadness />;
      case 'love':
        return <Love />;
      case 'surprise':
        return <Surprise />;
      default:
        return null;
    }
  }

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      {renderPage()}
    </Container>
  );
}

export default HomePage;









