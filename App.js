import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import HomeScreen from './components/HomeScreen';
import AgendaScreen from './components/AgendaScreen';
import LocationsScreen from './components/LocationsScreen';
import InfoScreen from './components/InfoScreen';

function App() {
  const [currentTab, setCurrentTab] = useState('home');

  const renderScreen = () => {
    switch(currentTab) {
      case 'home': return <HomeScreen />;
      case 'agenda': return <AgendaScreen />;
      case 'locations': return <LocationsScreen />;
      case 'info': return <InfoScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <ThemeProvider>
      <div className="app-container">
        <div className="screen-content">
          {renderScreen()}
        </div>
        <nav className="bottom-nav">
          <button 
            className={`nav-item ${currentTab === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentTab('home')}
          >
            <span className="material-icons">map</span>
            <span>Mappa</span>
          </button>
          <button 
            className={`nav-item ${currentTab === 'agenda' ? 'active' : ''}`}
            onClick={() => setCurrentTab('agenda')}
          >
            <span className="material-icons">event</span>
            <span>Agenda</span>
          </button>
          <button 
            className={`nav-item ${currentTab === 'locations' ? 'active' : ''}`}
            onClick={() => setCurrentTab('locations')}
          >
            <span className="material-icons">place</span>
            <span>Luoghi</span>
          </button>
          <button 
            className={`nav-item ${currentTab === 'info' ? 'active' : ''}`}
            onClick={() => setCurrentTab('info')}
          >
            <span className="material-icons">info</span>
            <span>Info</span>
          </button>
        </nav>
      </div>
    </ThemeProvider>
  );
}

export default App;