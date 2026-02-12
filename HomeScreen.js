import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { locations } from '../data/mockData';

function HomeScreen() {
  const { theme } = useTheme();
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <div className="screen" style={{ backgroundColor: theme.colors.background }}>
      <div className="header">
        <h1 style={{ color: theme.colors.textPrimary }}>Mappa Evento</h1>
        <p style={{ color: theme.colors.textSecondary }}>Green Pea - Torino</p>
      </div>

      <div className="map-container" style={{ backgroundColor: theme.colors.card }}>
        <div className="map-placeholder">
          <span className="material-icons" style={{ fontSize: 64, color: theme.colors.textSecondary }}>
            map
          </span>
          <p style={{ color: theme.colors.textSecondary }}>Mappa interattiva Green Pea</p>
        </div>
      </div>

      <div className="quick-access">
        <h3 style={{ color: theme.colors.textPrimary }}>Accesso Rapido</h3>
        <div className="quick-access-grid">
          {locations.slice(0, 4).map((location) => (
            <button
              key={location.id}
              className="quick-access-card"
              style={{ 
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.border 
              }}
              onClick={() => setSelectedMarker(location)}
            >
              <span className="material-icons" style={{ color: theme.colors.primary }}>
                {location.category === 'stage' ? 'mic' : 
                 location.category === 'food' ? 'restaurant' :
                 location.category === 'parking' ? 'local_parking' :
                 location.category === 'bathroom' ? 'wc' : 'place'}
              </span>
              <span style={{ color: theme.colors.textPrimary }}>{location.name}</span>
            </button>
          ))}
        </div>
      </div>

      {selectedMarker && (
        <div className="modal-overlay" onClick={() => setSelectedMarker(null)}>
          <div 
            className="location-modal" 
            style={{ backgroundColor: theme.colors.card }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2 style={{ color: theme.colors.textPrimary }}>{selectedMarker.name}</h2>
              <button 
                className="close-button"
                onClick={() => setSelectedMarker(null)}
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <p style={{ color: theme.colors.textSecondary }}>{selectedMarker.description}</p>
            {selectedMarker.availability && (
              <p style={{ color: theme.colors.textSecondary }}>
                <strong>Disponibilità:</strong> {selectedMarker.availability}
              </p>
            )}
            <button 
              className="primary-button"
              style={{ backgroundColor: theme.colors.primary }}
              onClick={() => alert('Navigazione verso ' + selectedMarker.name)}
            >
              <span className="material-icons">directions</span>
              Portami qui
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;