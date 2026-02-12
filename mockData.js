export const locations = [
  { 
    id: 1, 
    name: 'Palco Principale', 
    category: 'stage',
    description: 'Auditorium per le sessioni plenarie',
    availability: 'Capienza: 200 persone',
    latitude: 45.0703,
    longitude: 7.6869
  },
  { 
    id: 2, 
    name: 'Area Pranzo', 
    category: 'food',
    description: 'Ristorante e area catering',
    availability: 'Pranzo: 12:30-14:30',
    latitude: 45.0705,
    longitude: 7.6871
  },
  { 
    id: 3, 
    name: 'Parcheggio Principale', 
    category: 'parking',
    description: 'Parcheggio coperto Green Pea',
    availability: '150 posti auto disponibili',
    latitude: 45.0701,
    longitude: 7.6867
  },
  { 
    id: 4, 
    name: 'Bagni Piano Terra', 
    category: 'bathroom',
    description: 'Servizi igienici accessibili',
    latitude: 45.0704,
    longitude: 7.6870
  },
  { 
    id: 5, 
    name: 'Sala Workshop A', 
    category: 'stage',
    description: 'Sala per workshop paralleli',
    availability: 'Capienza: 50 persone',
    latitude: 45.0706,
    longitude: 7.6872
  }
];

export const agendaEvents = [
  {
    id: 1,
    date: '2026-04-18',
    start_time: '09:00',
    end_time: '10:30',
    title: 'Registrazione e Welcome Coffee',
    description: 'Check-in partecipanti e networking informale',
    location_name: 'Atrio Principale',
    notifications_enabled: false
  },
  {
    id: 2,
    date: '2026-04-18',
    start_time: '10:30',
    end_time: '12:00',
    title: 'Sessione Plenaria: Il Futuro del Service',
    description: 'Keynote speaker e panel discussion',
    location_name: 'Auditorium',
    notifications_enabled: false
  },
  {
    id: 3,
    date: '2026-04-18',
    start_time: '12:30',
    end_time: '14:00',
    title: 'Pranzo Networking',
    description: 'Pranzo sostenibile con prodotti locali',
    location_name: 'Area Ristorante',
    notifications_enabled: false
  },
  {
    id: 4,
    date: '2026-04-18',
    start_time: '14:30',
    end_time: '16:00',
    title: 'Workshop: Progetti Interact',
    description: 'Laboratori pratici su tematiche ambientali',
    location_name: 'Sala Workshop',
    notifications_enabled: false
  },
  {
    id: 5,
    date: '2026-04-18',
    start_time: '16:30',
    end_time: '18:00',
    title: 'Aperitivo e Chiusura Prima Giornata',
    description: 'Momento conviviale con musica dal vivo',
    location_name: 'Terrazza',
    notifications_enabled: false
  },
  {
    id: 6,
    date: '2026-04-19',
    start_time: '09:30',
    end_time: '11:00',
    title: 'Team Building Sostenibile',
    description: 'Attività di gruppo all\'aperto',
    location_name: 'Giardino Green Pea',
    notifications_enabled: false
  },
  {
    id: 7,
    date: '2026-04-19',
    start_time: '11:30',
    end_time: '13:00',
    title: 'Cerimonia di Chiusura',
    description: 'Premiazioni e saluti finali',
    location_name: 'Auditorium',
    notifications_enabled: false
  }
];