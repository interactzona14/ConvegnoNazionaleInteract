import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { agendaEvents } from '../data/mockData';

function AgendaScreen() {
  const { theme } = useTheme();
  const [selectedDay, setSelectedDay] = useState('2026-04-18');
  const [events, setEvents] = useState(agendaEvents);

  const dayEvents = events.filter(event => event.date === selectedDay);

  const toggleNotification = (eventId) => {
    setEvents(events.map(event => 
      event.id === eventId 
        ? { ...event, notifications_enabled: !event.notifications_enabled }
        : event
    ));
  };

  return (
    <div className="screen" style={{ backgroundColor: theme.colors.background }}>
      <div className="header">
        <h1 style={{ color: theme.colors.textPrimary }}>Agenda Evento</h1>
        <p style={{ color: theme.colors.textSecondary }}>18-19 Aprile 2026</p>
      </div>

      <div className="day-selector">
        <button
          className={`day-button ${selectedDay === '2026-04-18' ? 'active' : ''}`}
          style={{
            backgroundColor: selectedDay === '2026-04-18' ? theme.colors.primary : theme.colors.card,
            color: selectedDay === '2026-04-18' ? '#FFFFFF' : theme.colors.textPrimary,
            borderColor: theme.colors.border
          }}
          onClick={() => setSelectedDay('2026-04-18')}
        >
          18 Aprile
        </button>
        <button
          className={`day-button ${selectedDay === '2026-04-19' ? 'active' : ''}`}
          style={{
            backgroundColor: selectedDay === '2026-04-19' ? theme.colors.primary : theme.colors.card,
            color: selectedDay === '2026-04-19' ? '#FFFFFF' : theme.colors.textPrimary,
            borderColor: theme.colors.border
          }}
          onClick={() => setSelectedDay('2026-04-19')}
        >
          19 Aprile
        </button>
      </div>

      <div className="events-list">
        {dayEvents.length > 0 ? (
          dayEvents.map((event) => (
            <div 
              key={event.id} 
              className="event-card"
              style={{ backgroundColor: theme.colors.card }}
            >
              <div className="event-header">
                <span style={{ color: theme.colors.primary, fontWeight: 600 }}>
                  {event.start_time} - {event.end_time}
                </span>
                <button
                  className="icon-button"
                  onClick={() => toggleNotification(event.id)}
                >
                  <span 
                    className="material-icons"
                    style={{ 
                      color: event.notifications_enabled ? theme.colors.accent : theme.colors.textSecondary 
                    }}
                  >
                    {event.notifications_enabled ? 'notifications' : 'notifications_off'}
                  </span>
                </button>
              </div>
              <h3 style={{ color: theme.colors.textPrimary }}>{event.title}</h3>
              <p style={{ color: theme.colors.textSecondary }}>{event.description}</p>
              {event.location_name && (
                <div className="event-location">
                  <span className="material-icons" style={{ color: theme.colors.primary }}>
                    place
                  </span>
                  <span style={{ color: theme.colors.primary }}>{event.location_name}</span>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="empty-state">
            <span className="material-icons" style={{ fontSize: 48, color: theme.colors.textSecondary }}>
              event
            </span>
            <p style={{ color: theme.colors.textSecondary }}>Nessun evento per questo giorno</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AgendaScreen;