# Gabriele Canova — Portfolio web

Portfolio statico, modulare e aggiornabile. È progettato come **9 sezioni / pagine**, con navigazione a scroll, tastiera, schede progetto in modal, player audio e link a documentazione.

## Aprire il sito
Aprire `index.html` nel browser oppure pubblicare l'intera cartella su un hosting statico.

## Aggiornare progetti e link
Il contenuto è centralizzato in:

`data/projects.js`

Ogni progetto è un oggetto con questi campi principali:
- `slug`: identificatore univoco
- `title`, `year`, `category`, `format`
- `image`: percorso dell'immagine
- `summary`: testo breve
- `tags`: parole chiave
- `audio`: uno o più player opzionali
- `links`: link opzionali a video, ascolti, PDF, patch, repository

Per aggiungere un link esterno:

```js
links: [
  { label: "Video", href: "https://..." },
  { label: "Full listen", href: "https://..." }
]
```

Per aggiungere un nuovo progetto basta creare un nuovo oggetto in `projects.js` e inserirne lo `slug` nella sezione desiderata in `site.js`.

## Sostituire immagini
Copiare le immagini in `assets/img/` e aggiornare il campo `image` del progetto.

## Audio
Gli ascolti presenti nella prima versione sono MP3 web compressi. I master WAV originali non vengono alterati. Per sostituire un ascolto basta mettere il nuovo file in `assets/audio/` e aggiornare il percorso in `projects.js`.

`Wasalo` include:
- riferimento stereo ottenuto dal mix front/back;
- coppia frontale L/R;
- coppia posteriore L/R.

## PDF / portfolio in pagine
Il pulsante **PDF** usa la funzione di stampa del browser. Il CSS di stampa divide il sito nelle 9 sezioni del portfolio, in A4 orizzontale.

## Pubblicazione
La cartella non richiede build, database o dipendenze. Può essere caricata direttamente su un hosting statico. Per aggiornare il portfolio in futuro è sufficiente sostituire i file e modificare `projects.js`.
