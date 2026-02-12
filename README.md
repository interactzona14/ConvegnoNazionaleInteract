# Interact Event App - Zona 14

App web per la gestione dell'evento Interact Zona 14 presso Green Pea, Torino.

## 🚀 Deploy su Netlify

### Metodo 1: Drag & Drop (più semplice)
1. Esegui `npm install` per installare le dipendenze
2. Esegui `npm run build` per creare la cartella di produzione
3. Vai su [app.netlify.com](https://app.netlify.com)
4. Trascina la cartella `build` nell'area di drop

### Metodo 2: Deploy da Git
1. Carica il progetto su GitHub
2. Vai su Netlify > "New site from Git"
3. Seleziona il repository
4. Configurazione automatica (Netlify rileva React)
5. Clicca "Deploy site"

## 📦 Installazione Locale

```bash
npm install
npm start
```

L'app sarà disponibile su [http://localhost:3000](http://localhost:3000)

## 🛠️ Comandi Disponibili

- `npm start` - Avvia il server di sviluppo
- `npm run build` - Crea la build di produzione
- `npm test` - Esegue i test

## 📱 Funzionalità

- **Mappa Interattiva**: Visualizza i punti di interesse dell'evento
- **Agenda**: Programma completo delle due giornate (18-19 Aprile 2026)
- **Luoghi**: Elenco dettagliato di palchi, aree pranzo, parcheggi e servizi
- **Info**: Contatti, WiFi e FAQ

## 🎨 Personalizzazione

### Colori
Modifica `src/context/ThemeContext.js` per cambiare i colori del tema:
- `primary`: Blu Interact (#003DA5)
- `accent`: Oro Interact (#FFD700)

### Dati
Aggiorna `src/data/mockData.js` per modificare:
- Luoghi e punti di interesse
- Eventi dell'agenda

## 📄 Licenza

© 2026 Interact Zona 14 - Tutti i diritti riservati
