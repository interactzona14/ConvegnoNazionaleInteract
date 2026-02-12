import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { locations } from '../data/mockData';

function LocationsScreen() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tutti', icon: 'apps' },
    { id: 'stage', name: 'Palco', icon: 'mic' },
    { id: 'food', name: 'Pranzo', icon: 'restaurant' },
    { id: 'bathroom', name: 'Bagni', icon: 'wc' },
    { id: 'parking', name: 'Parcheggi', icon: 'local_parking' }
  ];

  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || location.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="screen" style={{ backgroundColor: theme.colors.background }}>
      <div className="header">
        <h1 style={{ color: theme.colors.textPrimary }}>Luoghi</h1>
        <p style={{ color: theme.colors.textSecondary }}>Tutti i punti di interesse</p>
      </div>

      <div className="search-container">
        <div 
          className="search-bar"
          style={{ 
            backgroundColor: theme.colors.card,
            borderColor: theme.colors.border 
          }}
        >
          <span className="material-icons" style={{ color: theme.colors.textSecondary }}>
            search
          </span>
          <input
            type="text"
            placeholder="Cerca un luogo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ color: theme.colors.textPrimary }}
          />
        </div>
      </div>

      <div className="categories-scroll">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
            style={{
              backgroundColor: selectedCategory === category.id 
                ? theme.colors.primary 
                : theme.colors.card,
              color: selectedCategory === category.id 
                ? '#FFFFFF' 
                : theme.colors.textPrimary,
              borderColor: theme.colors.border
            }}
            onClick={() => setSelectedCategory(category.id)}
          >
            <span className="material-icons">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      <div className="locations-list">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
            <div 
              key={location.id}
              className="location-card"
              style={{ backgroundColor: theme.colors.card }}
            >
              <div className="location-card-header">
                <div className="location-icon">
                  <span className="material-icons" style={{ color: theme.colors.primary }}>
                    {location.category === 'stage' ? 'mic' : 
                     location.category === 'food' ? 'restaurant' :
                     location.category === 'parking' ? 'local_parking' :
                     location.category === 'bathroom' ? 'wc' : 'place'}
                  </span>
                </div>
                <div className="location-info">
                  <h3 style={{ color: theme.colors.textPrimary }}>{location.name}</h3>
                  <p style={{ color: theme.colors.textSecondary }}>
                    {Math.floor(Math.random() * 200) + 50}m di distanza
                  </p>
                </div>
              </div>
              {location.description && (
                <p style={{ color: theme.colors.textSecondary }}>{location.description}</p>
              )}
              {location.availability && (
                <p style={{ color: theme.colors.textSecondary }}>
                  <strong>Info:</strong> {location.availability}
                </p>
              )}
              <button 
                className="primary-button"
                style={{ backgroundColor: theme.colors.primary }}
                onClick={() => alert('Navigazione verso ' + location.name)}
              >
                <span className="material-icons">directions</span>
                Portami qui
              </button>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <span className="material-icons" style={{ fontSize: 48, color: theme.colors.textSecondary }}>
              search_off
            </span>
            <p style={{ color: theme.colors.textSecondary }}>Nessun luogo trovato</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LocationsScreen;