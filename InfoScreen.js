import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

function InfoScreen() {
  const { theme } = useTheme();
  const [expandedFaq, setExpandedFaq] = useState(null);

  const contacts = [
    { type: 'email', label: 'Email Organizzatori', value: 'interact.zona14@gmail.com', icon: 'email' },
    { type: 'phone', label: 'Telefono Emergenze', value: '+39 123 456 7890', icon: 'phone' },
    { type: 'instagram', label: 'Instagram', value: '@interactzona14', icon: 'camera_alt' }
  ];

  const wifiInfo = [
    { label: 'Rete WiFi', value: 'GreenPea_Guest', icon: 'wifi' },
    { label: 'Password', value: 'Interact2026!', icon: 'lock' }
  ];

  const faqs = [
    {
      id: 'parking',
      question: 'Dove posso parcheggiare?',
      answer: 'Parcheggi disponibili al Green Pea e nelle vicinanze. Consigliamo mezzi pubblici per evitare traffico.'
    },
    {
      id: 'dress-code',
      question: 'Qual è il dress code?',
      answer: 'Abbigliamento smart casual. Consigliati colori Interact (blu e oro) per le foto di gruppo.'
    },
    {
      id: 'food',
      question: 'Ci sono restrizioni alimentari?',
      answer: 'Comunica allergie e intolleranze durante la registrazione. Opzioni vegetariane disponibili.'
    },
    {
      id: 'schedule',
      question: 'Cosa succede se arrivo in ritardo?',
      answer: 'Registrazione aperta dalle 8:30. Staff disponibile per orientamento durante tutto l\'evento.'
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copiato: ' + text);
    }).catch(() => {
      alert(text);
    });
  };

  return (
    <div className="screen" style={{ backgroundColor: theme.colors.background }}>
      <div className="header">
        <h1 style={{ color: theme.colors.textPrimary }}>Info Essenziali</h1>
        <p style={{ color: theme.colors.textSecondary }}>Tutto quello che ti serve sapere</p>
      </div>

      <button 
        className="tickets-button"
        style={{ backgroundColor: theme.colors.accent }}
        onClick={() => window.open('https://humanitix.com', '_blank')}
      >
        <span className="material-icons">confirmation_number</span>
        <span style={{ color: theme.colors.textPrimary }}>Biglietti Humanitix</span>
      </button>

      <div className="info-card" style={{ backgroundColor: theme.colors.card }}>
        <h2 style={{ color: theme.colors.textPrimary }}>Contatti</h2>
        {contacts.map((contact, index) => (
          <button
            key={index}
            className="contact-item"
            onClick={() => copyToClipboard(contact.value)}
          >
            <span className="material-icons" style={{ color: theme.colors.primary }}>
              {contact.icon}
            </span>
            <div className="contact-info">
              <span style={{ color: theme.colors.textPrimary }}>{contact.label}</span>
              <span style={{ color: theme.colors.textSecondary }}>{contact.value}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="info-card" style={{ backgroundColor: theme.colors.card }}>
        <h2 style={{ color: theme.colors.textPrimary }}>WiFi Green Pea</h2>
        {wifiInfo.map((info, index) => (
          <button
            key={index}
            className="contact-item"
            onClick={() => copyToClipboard(info.value)}
          >
            <span className="material-icons" style={{ color: theme.colors.primary }}>
              {info.icon}
            </span>
            <div className="contact-info">
              <span style={{ color: theme.colors.textPrimary }}>{info.label}</span>
              <span style={{ color: theme.colors.textSecondary }}>{info.value}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="info-card" style={{ backgroundColor: theme.colors.card }}>
        <h2 style={{ color: theme.colors.textPrimary }}>Domande Frequenti</h2>
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <button
              className="faq-question-button"
              onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
            >
              <span style={{ color: theme.colors.textPrimary }}>{faq.question}</span>
              <span className="material-icons" style={{ color: theme.colors.textSecondary }}>
                {expandedFaq === faq.id ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {expandedFaq === faq.id && (
              <p className="faq-answer" style={{ color: theme.colors.textSecondary }}>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoScreen;